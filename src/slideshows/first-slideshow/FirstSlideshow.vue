<template lang='pug'>
.eg-theme-agrume
  .eg-slideshow
    slide(steps="2")
      h1 Business Logic
      h1(v-if="step > 1").
        in Django

    slide
      h2 About me
      ul
        li Currently Technical Team leader at VideoBeat
        li CTO at <a href='https://pvpc.eu'>PvP Center</a>
        li Frontend, Backend, DevOps, GameDev, Machine Learning...
        li Blogger (sometimes)
        li Polyglot programmer, technology enthusiast

    slide(steps="3")
      h2 Business logic
      h3(v-if="step === 2") Your definitions?
      h3(v-if="step > 2") My definition
      p(v-if="step > 2").
        It's a set of domain-related rules how data in our application can be manipulated, based on real-world requirements.

    slide(steps="3")
      h2 Business logic
      .u-text-centered
        h4(v-if="step === 1") Queries + Commands
        div(v-if="step === 2")
          h4
            strong Queries
            |  + Commands
          p
            | In Django, the best place is a good combination of
            strong  Manager
            |  and
            strong  QuerySet
            |  methods
        div(v-if="step === 3")
          h4
            | Queries +
            strong  Commands
          p We'll be focusing on this aspect during this presentation

    slide(:steps="shortVersion ? 1 : 3")
      h2 Example from my startup
      div(v-if="step === 1")
        h4 Forming a team
        ul
          li As a tournament team leader,
          li I can invite other players to my team
          li Only if they have added required game to their accounts
          li And team is not full
      div(v-if="step == 2 && !shortVersion")
        h4 Finishing match
        ul
          li After receiving tournament match results as a webhook,
          li Match should be marked as finished,
          li Winning team should be progressed to the next match,
          li Losing team should be removed from the tournament,
          li They should be notified of what happened,
          li And next match should start if both teams are ready
      div(v-if="step == 3 && !shortVersion")
        h4 Finishing match (conflict case)
        ul
          li After receiving tournament match results from one of participating teams,
          li And they differ,
          li Match should be marked as in conflict,
          li and moderator should be notified

    slide(steps=5)
      h2 Common requirements
      ul
        li Validate if action can be performed
        li(v-if="step > 1") Present to user / log on a server a reason why it can't
        li(v-if="step > 2") Use logic in different contexts
        li(v-if="step > 3") Heavy testing
        li(v-if="step > 4") Be readable!
      img(v-if="step === 1" src="./assets/join_tournament_allowed.png")
      img(v-if="step === 2" src="./assets/join_tournament_error.png")

    slide(steps="3")
      h2 Django - MVT framework
      h3(v-if="step >= 2") #[strong Model] + #[strong View] + #[strong Template]
      h3(v-if="step >= 3") Where to put business logic?

    slide(steps="5")
      h2 Model + #[strong View] + Template
      h4(v-if="step === 2") Typical choice for new Django users
      highlight-code.eg-code-block.code-box(v-if="step === 3", lang="python").
        def invite_player_to_team(request):
            # simplified
            form = TeamMemberForm(request.POST)
            if form.is_valid():
                member = form.save()
                message = "User has been invited to the team!"
                messages.success(message)
                return HttpResponseRedirect('/team/')
            else:
                return HttpResponse('template.html', context={'form': form})

      template(v-if="step === 4")
        h4 Pros
        ul
          li Easy & works
          li Well-documented
          li Has many shortcuts in Django, like ModelForm

      template(v-if="step === 5")
        h4 Cons
        ul
          li Hard to reuse (multiple similar views? management commands?)
          li Hard and slow to test (full request - response cycle)

    slide(steps="6")
      h2 #[strong Model] + View + Template
      h4(v-if="step === 2") Typical second choice
      highlight-code.eg-code-block.code-box(v-if="step === 3", lang="python").
        class Team(models.Model):
            ...

            def add_member(user):
                member = TeamMember(user=user, team=self)
                member.save()
                return member

      template(v-if="step === 4")
        h4 Pros
        ul
          li DRY (views just calls methods from models)
          li "Fat models, skinny views"

      template(v-if="step === 5")
        h4 Cons
        ul
          li Business logic is usually cross-model
          li Where to put this function?
          li Models will grow and eat you

      highlight-code.eg-code-block.code-box(v-if="step === 6", lang="python").
        class Team(models.Model):
            ...

            def add_member(user, inviting_member):
                if inviting_member.role != LEADER:
                    raise TeamInvitationException("You have to be a leader!")
                if not user.has_game(self.game):
                    raise TeamInvitationException("User don't have this game!")
                member = TeamMember(user=user, team=self)
                member.save()
                notifications.send(user, "You are invited to the team")
                invitation_create_signal.send_robust(member)
                return member

    slide(steps="4")
      h2 Model + View + #[strong Template]
      h4(v-if="step >= 2 && step <= 3") The final solution I wanted to show you
      highlight-code.eg-code-block.code-box(v-if="step === 3", lang="python").
        {% has_game user team.game as user_has_game %}
        {% is_leader team inviting_member as is_leader %}
        {% if not user_has_game %}
            User has to add this game first!
        {% elif not is_leader %}
            You are not a leader!
        {% else %}
            &lt;Button&gt;Invite!&lt;/Button&gt;
        {% endif %}
      .u-text-centered
        img(v-if="step === 4", src="./assets/rickrolled.gif")

    slide(steps="4")
      h2 My solution
      .u-text-centered
        img(v-if="step === 2" src="./assets/django_raw.svg")
        img(v-if="step === 3" src="./assets/django_clean.svg")
        img(v-if="step === 4" src="./assets/django_services.svg")

    slide(steps="4")
      h2 Services.py
      highlight-code.eg-code-block.code-box(v-if="step === 1", lang="python").
        def invite_user_to_team(user, inviting_member):
            member = TeamMember(user=user, team=self)
            member.save()
            notifications.send(user, "You are invited to the team")
            return member
      div(v-if="step === 2")
        h4 Requirements
        ul
          li Standard python functions
          li Only Django models (no request, responses, forms)
          li Everything needed should be passed by parameters
          li Result dependant only on parameters and DB (semi-functional?)
      div(v-if="step === 3")
        h4 Testing is easy
        highlight-code.eg-code-block.code-box(lang="python").
          @mock.patch('services.notifications')
          def test_invite_to_team(notification_mock):
              team = TeamFactory()
              leader = TeamLeaderFactory(team=team)
              user = UserFactory()
              invited_user = invite_user_to_team(user, leader)
              assert invited_user.team == team
              notification_mock.send.assert_called_with(
                  user, "You are invited to the team")
      div(v-if="step === 4")
        h4 You can use it in different contexts
        ul
          li Views
          li Management commands
          li Async tasks
          li API methods

    slide(steps="2")
      div(v-if="step === 1")
        h2 It can solve
        ul
          li Validate if action can be performed
          li Present to user / log on server a reason why it can't
          li
            strong Use logic in different contexts
          li
            strong Heavy testing
          li
            strong Be readable!
      div(v-if="step === 2")
        h2 But what about these?
        ul
          li
            strong Validate if action can be performed
          li
            strong Present to user / log on server a reason why it can't
          li Use logic in different contexts
          li Heavy testing
          li Be readable!
      
    slide(steps="4")
      h2 Validate an action
      highlight-code.eg-code-block.code-box(v-if="step === 1", lang="python").
        def invite_user_to_team(user, inviting_member):
            if inviting_member.role != LEADER:
                raise BusinessLogicException("You have to be a leader!")
            if not user.has_game(self.game):
                raise BusinessLogicException("User don't have this game!")
            member = TeamMember(user=user, team=self)
            member.save()
            notifications.send(user, "You are invited to the team")
            return member
      highlight-code.eg-code-block.code-box(v-if="step === 2", lang="python").
        def can_invite_user_to_team(user, inviting_member):
            if inviting_member.role != LEADER:
                raise BusinessLogicException("You have to be a leader!")
            if not user.has_game(self.game):
                raise BusinessLogicException("User doesn't have this game!")
        
        def invite_user_to_team(user, inviting_member):
            member = TeamMember(user=user, team=self)
            member.save()
            notifications.send(user, "You are invited to the team")
            return member
      highlight-code.eg-code-block.code-box(v-if="step === 3", lang="python").
        def can_invite_user_to_team(user, inviting_member):
            if inviting_member.role != LEADER:
                raise BusinessLogicException(
                    "You have to be a leader!", error_code='NOT_LEADER')
            if not user.has_game(self.game):
                raise BusinessLogicException(
                    "User doesn't have this game!", error_code='NEED_GAME')
            return True

        def invite_user_to_team(user, inviting_member):
            member = TeamMember(user=user, team=self)
            member.save()
            notifications.send(user, "You are invited to the team")
            return member
      highlight-code.eg-code-block.code-box(v-if="step === 4", lang="python").
        # Usage
        def invite_user_view(request):
            # simplified, also can be done using forms or serializers in API
            inviting_member = TeamMember.objects.get(user_id=request.user.pk)
            user = User.objects.get(pk=request.POST.get('user_pk'))
            try:
                if can_invite_user_to_team(user, inviting_member):
                    member = invite_user_to_team(user, inviting_member)
                    return HttpResponseRedirect('/team/')
            except BusinessLogicException as e:
                # template can use error message or error code to render conditionally
                return HttpResponse(template, context={'error': e})

    slide(steps="3")
      h2 Can we do better?
      h3(v-if="step === 2") Sure!
      h4(v-if="step === 3") Let's look into my #[strong python-business-logic] package

    slide(steps="6")
      h2 python-business-logic
      highlight-code.eg-code-block.code-box(v-if="step === 1", lang="python").
        from business_logic import validator, validated_by, LogicException

        @validator
        def can_invite_user_to_team(user, inviting_member):
            if inviting_member.role != LEADER:
                raise LogicException(
                    "You have to be a leader!", error_code='NOT_LEADER')
            ...

        @validated_by(can_invite_user_to_team)
        def invite_user_to_team(user, inviting_member):
            ...
      highlight-code.eg-code-block.code-box(v-if="step === 2", lang="python").
        # automatic validation and exception raising
        invite_user_to_team(user, inviting_member)

        # skip validation
        invite_user_to_team(user, inviting_member, validate=False)
      highlight-code.eg-code-block.code-box(v-if="step === 3", lang="python").
        # check if action can be performed
        result = can_invite_user_to_team(user, inviting_member, raise_exception=False)
        assert not result          # or result.success
        assert result.error_code   # NOT_LEADER
        assert result.error        # LogicException(..., error_code='NOT_LEADER')
      highlight-code.eg-code-block.code-box(v-if="step === 4", lang="python").
        # Error registry
        from business_logic import LogicErrors

        class TeamLogicErrors(LogicErrors):
            # automatic error codes
            NOT_LEADER = LogicException("You are not a team leader!")
            NEED_GAME = LogicException("User doesn't have this game!")

      p(v-if="step === 4") Usage
      highlight-code.eg-code-block.code-box(v-if="step === 4", lang="python").
        @validator
        def can_invite_user_to_team(user, inviting_member):
          if inviting_member.role != LEADER:
              raise TeamLogicErrors.NOT_LEADER
      highlight-code.eg-code-block.code-box(v-if="step === 5", lang="python").
        # Validators chaining
        @validator
        def can_take_part_in_tournament(user, tournament):
            if tournament.members.filter(user_pk=user.pk).exists()
                raise TournamentErrors.ALREADY_IN_TOURNAMENT


        @validator
        def can_invite_user_to_team(user, inviting_member):
            ...
            can_take_part_in_tournament(user, inviting_member.team.tournament)
      highlight-code.eg-code-block.code-box(v-if="step === 6", lang="python").
        # Customized error messages
        class TeamLogicErrors(LogicErrors):
            NEED_GAME = LogicException("{user} doesn't have this game!")

        raise TeamLogicErrors.NEED_GAME.format(user='John')

    slide(steps="3")
      h2 Want better? #[strong Middleware]!
      h4(v-if="step === 1") It allows you to handle exceptions transparently, and code only happy path
      highlight-code.eg-code-block.code-box(v-if="step === 2", lang="python").
        def handle_api_exception(exception, context):
            if isinstance(exception, LogicException):
                exception = exceptions.ParseError(_(f"Invalid operation: {exception}"))
            return default_exception_handler(exception, context)
      highlight-code.eg-code-block.code-box(v-if="step === 3", lang="python").
        class TournamentTeamMemberCreateSerializer(serializers.ModelSerializer):
            class Meta:
                model = models.TournamentTeamMember
                fields = ('pk', 'user', 'team')

            def create(self, validated_data):
                team = validated_data['team']
                user = validated_data['user']
                request = self.context['request']
                by_member = (
                  models.TournamentTeamMember.objects
                  .filter(user=request.user, team=team)
                  .first())
                if not by_member:
                  raise NotPermittedException("Must be a team member!")
                return services.invite_user_to_team(by_member, user=user)

    slide
      h2 Thank you for attention!
      div.u-text-centered
        h4 <a href='https://github.com/Valian/python-business-logic'>github.com/Valian/python-business-logic</a>
        h4 Twitter @jskalc
        h4 Blog <a href="https://rock-it.pl">rock-it.pl</a>
        h4 PS. #[strong We're hiring!] <a href="https://videobeat.net">videobeat.net</a>


</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [ eagle.slideshow ],
  data () {
    return {
      shortVersion: true
    }
  },
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Your First Slideshow',
    description: 'A boilerplate to get you started',
    path: 'your-first-slideshow'
  }
}
</script>

<style lang='scss'>
.u-text-centered {
  text-align: center;
}
</style>
