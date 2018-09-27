webpackJsonp([1],{10:function(e,t){},12:function(e,t,n){n(17);var s=n(4)(n(14),n(201),null,null);e.exports=s.exports},13:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var a=n(2),i=s(a),r=n(12),o=s(r),l=n(1),_=s(l);n(6),n(7),n(9),n(8);var m=n(11),d=s(m);n(10);var c=n(5),u=s(c);i.default.use(_.default),i.default.use(d.default),i.default.config.productionTip=!1,new i.default({el:"#app",router:u.default,template:"<App/>",components:{App:o.default}})},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),a=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={mixins:[a.default.slideshow],data:function(){return{shortVersion:!0}}}},16:function(e,t){},17:function(e,t){},192:function(e,t,n){e.exports=n.p+"static/img/django-logo.daf52ae.png"},193:function(e,t,n){e.exports=n.p+"static/img/django_clean.307b2c8.svg"},194:function(e,t,n){e.exports=n.p+"static/img/django_raw.80883a4.svg"},195:function(e,t,n){e.exports=n.p+"static/img/django_services.5537bf7.svg"},196:function(e,t,n){e.exports=n.p+"static/img/join_tournament_allowed.688c0be.png"},197:function(e,t,n){e.exports=n.p+"static/img/join_tournament_error.1070f40.png"},198:function(e,t,n){e.exports=n.p+"static/img/rickrolled.c134dd0.gif"},199:function(e,t,n){n(16);var s=n(4)(n(15),n(200),null,null);e.exports=s.exports},200:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"eg-theme-agrume"},[s("div",{staticClass:"eg-slideshow",attrs:{id:"business-logic"}},[s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[s("h1",[e._v("Business Logic in")]),s("div",{staticClass:"u-text-centered"},[s("img",{attrs:{src:n(192)}})]),s("h2",[e._v("Jakub Skałecki @jskalc")]),s("h4",{staticClass:"u-text-centered"},[e._v("PyKonik, 27.09.2018")])]),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[s("h2",[e._v("About me")]),s("ul",[s("li",[e._v("Currently Technical Team Leader at VideoBeat")]),s("li",[e._v("CTO at "),s("a",{attrs:{href:"https://pvpc.eu"}},[e._v("PvP Center")])]),s("li",[e._v("Frontend, Backend, DevOps, GameDev, Machine Learning...")]),s("li",[e._v("Blogger (sometimes)")]),s("li",[e._v("Polyglot programmer, technology enthusiast")])])]),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"3"}},[s("h2",[e._v("Business logic")]),2===e.step?s("h3",[e._v("Your definitions?")]):e._e(),e.step>2?s("h3",[e._v("My definition")]):e._e(),e.step>2?s("eg-transition",{attrs:{enter:"bounceInLeft",leave:"fadeOut"}},[s("blockquote",[e._v("It's a set of domain-related rules how data in our application can be manipulated, based on real-world requirements.")])]):e._e()],1),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"3"}},[s("h2",[e._v("Business logic")]),s("div",{staticClass:"u-text-centered"},[1===e.step?s("h4",[e._v("Queries + Commands")]):e._e(),2===e.step?s("div",[s("h4",[s("strong",[e._v("Queries")]),e._v(" + Commands")]),s("eg-transition",{key:"queries",attrs:{enter:"bounceInDown"}},[s("p",[e._v("In Django, the best place is a good combination of"),s("strong",[e._v(" Manager")]),e._v(" and"),s("strong",[e._v(" QuerySet")]),e._v(" methods")])])],1):e._e(),3===e.step?s("div",[s("h4",[e._v("Queries +"),s("strong",[e._v(" Commands")])]),s("eg-transition",{key:"commands",attrs:{enter:"bounceInDown"}},[s("p",[e._v("We'll be focusing on this aspect during this presentation")])])],1):e._e()])]),s("slide",{attrs:{steps:e.shortVersion?2:4}},[s("h2",[e._v("Example from my startup")]),2===e.step?s("eg-transition",{key:"example1",attrs:{enter:"slideInLeft",leave:"slideOutTop"}},[s("div",[s("h4",[e._v("Forming a team")]),s("ul",[s("li",[e._v("As a tournament team leader,")]),s("li",[e._v("I can invite other players to my team")]),s("li",[e._v("Only if they have added required game to their accounts")]),s("li",[e._v("And team is not full")])])])]):e._e(),3!==e.step||e.shortVersion?e._e():s("div",[s("h4",[e._v("Finishing match")]),s("ul",[s("li",[e._v("After receiving tournament match results as a webhook,")]),s("li",[e._v("Match should be marked as finished,")]),s("li",[e._v("Winning team should be progressed to the next match,")]),s("li",[e._v("Losing team should be removed from the tournament,")]),s("li",[e._v("They should be notified of what happened,")]),s("li",[e._v("And next match should start if both teams are ready")])])]),4!==e.step||e.shortVersion?e._e():s("div",[s("h4",[e._v("Finishing match (conflict case)")]),s("ul",[s("li",[e._v("After receiving tournament match results from one of participating teams,")]),s("li",[e._v("And they differ,")]),s("li",[e._v("Match should be marked as in conflict,")]),s("li",[e._v("and moderator should be notified")])])])],1),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"5"}},[s("h2",[e._v("Common requirements")]),s("ul",[s("li",[e._v("Validate if action can be performed")]),e.step>1?s("li",[e._v("Present to user / log on a server a reason why it can't")]):e._e(),e.step>2?s("li",[e._v("Use logic in different contexts")]):e._e(),e.step>3?s("li",[e._v("Heavy testing")]):e._e(),e.step>4?s("li",[e._v("Be readable!")]):e._e()]),s("div",{staticClass:"u-text-centered"},[1===e.step?s("img",{staticClass:"presentation-image",attrs:{src:n(196)}}):e._e(),2===e.step?s("img",{staticClass:"presentation-image",attrs:{src:n(197)}}):e._e()])]),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"3"}},[s("h2",[e._v("Django - MVT framework")]),e.step>=2?s("h3",[s("strong",[e._v("Model")]),e._v(" + "),s("strong",[e._v("View")]),e._v(" + "),s("strong",[e._v("Template")])]):e._e(),e.step>=3?s("h3",[e._v("Where to put business logic?")]):e._e()]),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"5"}},[s("h2",[e._v("Model + "),s("strong",[e._v("View")]),e._v(" + Template")]),2===e.step?s("h4",[e._v("Typical choice for new Django users")]):e._e(),3===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("def invite_player_to_team(request):\n    # simplified\n    form = TeamMemberForm(request.POST)\n    if form.is_valid():\n        member = form.save()\n        message = \"User has been invited to the team!\"\n        messages.success(message)\n        return HttpResponseRedirect('/team/')\n    else:\n        return HttpResponse(\n            'template.html',\n            context={'form': form})\n")]):e._e(),4===e.step?[s("h4",[e._v("Pros")]),s("ul",[s("li",[e._v("Easy & works")]),s("li",[e._v("Well-documented")]),s("li",[e._v("Has many shortcuts in Django, like ModelForm")])])]:e._e(),5===e.step?[s("h4",[e._v("Cons")]),s("ul",[s("li",[e._v("Hard to reuse (multiple similar views? management commands?)")]),s("li",[e._v("Hard and slow to test (full request - response cycle)")])])]:e._e()],2),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"6"}},[s("h2",[s("strong",[e._v("Model")]),e._v(" + View + Template")]),2===e.step?s("h4",[e._v("Typical second choice")]):e._e(),3===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("class Team(models.Model):\n    ...\n\n    def add_member(user):\n        member = TeamMember(user=user, team=self)\n        member.save()\n        return member\n")]):e._e(),4===e.step?[s("h4",[e._v("Pros")]),s("ul",[s("li",[e._v("DRY (views just calls methods from models)")]),s("li",[e._v('"Fat models, skinny views"')])])]:e._e(),5===e.step?[s("h4",[e._v("Cons")]),s("ul",[s("li",[e._v("Business logic is usually cross-model")]),s("li",[e._v("Where to put this function?")]),s("li",[e._v("Models will grow and eat you")])])]:e._e(),6===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v('class Team(models.Model):\n    ...\n\n    def add_member(user, inviting_member):\n        if inviting_member.role != LEADER:\n            raise TeamInvitationException(\n                "You have to be a leader!")\n        if not user.has_game(self.game):\n            raise TeamInvitationException(\n                "User don\'t have this game!")\n        member = TeamMember(user=user, team=self)\n        member.save()\n        notifications.send(user, "You are invited to the team")\n        invitation_create_signal.send_robust(member)\n        return member\n')]):e._e()],2),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"4"}},[s("h2",[e._v("Model + View + "),s("strong",[e._v("Template")])]),e.step>=2&&e.step<=3?s("h4",[e._v("The final solution I wanted to show you")]):e._e(),3===e.step?s("highlight-code",{staticClass:"eg-code-block code-box"},[e._v("{% has_game user team.game as user_has_game %}\n{% is_leader team inviting_member as is_leader %}\n{% if not user_has_game %}\n    User has to add this game first!\n{% elif not is_leader %}\n    You are not a leader!\n{% else %}\n    <Button>Invite!</Button>\n{% endif %}")]):e._e(),s("div",{staticClass:"u-text-centered"},[4===e.step?s("img",{attrs:{src:n(198)}}):e._e()])],1),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"4"}},[s("h2",[e._v("My solution")]),s("div",{staticClass:"u-text-centered"},[2===e.step?s("img",{attrs:{src:n(194)}}):e._e(),3===e.step?s("img",{attrs:{src:n(193)}}):e._e(),4===e.step?s("img",{attrs:{src:n(195)}}):e._e()])]),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"4"}},[s("h2",[e._v("Services.py")]),1===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v('def invite_user_to_team(user, inviting_member):\n    member = TeamMember(user=user, team=self)\n    member.save()\n    notifications.send(user, "You are invited to the team")\n    return member')]):e._e(),2===e.step?s("div",[s("h4",[e._v("Requirements")]),s("ul",[s("li",[e._v("Standard python functions")]),s("li",[e._v("Only Django models (no request, responses, forms)")]),s("li",[e._v("Everything needed should be passed by parameters")]),s("li",[e._v("Result dependant only on parameters and DB (semi-functional?)")])])]):e._e(),3===e.step?s("div",[s("h4",[e._v("Testing is easy")]),s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("@mock.patch('services.notifications')\ndef test_invite_to_team(notification_mock):\n    team = TeamFactory()\n    leader = TeamLeaderFactory(team=team)\n    user = UserFactory()\n    invited_user = invite_user_to_team(user, leader)\n    assert invited_user.team == team\n    notification_mock.send.assert_called_with(\n        user, \"You are invited to the team\")")])],1):e._e(),4===e.step?s("div",[s("h4",[e._v("You can use it in different contexts")]),s("ul",[s("li",[e._v("Views")]),s("li",[e._v("Management commands")]),s("li",[e._v("Async tasks")]),s("li",[e._v("API methods")])])]):e._e()],1),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"2"}},[1===e.step?s("div",[s("h2",[e._v("It can solve")]),s("ul",[s("li",[e._v("Validate if action can be performed")]),s("li",[e._v("Present to user / log on server a reason why it can't")]),s("li",[s("strong",[e._v("Use logic in different contexts")])]),s("li",[s("strong",[e._v("Heavy testing")])]),s("li",[s("strong",[e._v("Be readable!")])])])]):e._e(),2===e.step?s("div",[s("h2",[e._v("But what about these?")]),s("ul",[s("li",[s("strong",[e._v("Validate if action can be performed")])]),s("li",[s("strong",[e._v("Present to user / log on server a reason why it can't")])]),s("li",[e._v("Use logic in different contexts")]),s("li",[e._v("Heavy testing")]),s("li",[e._v("Be readable!")])])]):e._e()]),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"4"}},[s("h2",[e._v("Validate an action")]),1===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v('def invite_user_to_team(user, inviting_member):\n    if inviting_member.role != LEADER:\n        raise BusinessLogicException("You have to be a leader!")\n    if not user.has_game(self.game):\n        raise BusinessLogicException("User don\'t have this game!")\n    member = TeamMember(user=user, team=self)\n    member.save()\n    notifications.send(user, "You are invited to the team")\n    return member')]):e._e(),2===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v('def can_invite_user_to_team(user, inviting_member):\n    if inviting_member.role != LEADER:\n        raise BusinessLogicException("You have to be a leader!")\n    if not user.has_game(self.game):\n        raise BusinessLogicException("User doesn\'t have this game!")\n\ndef invite_user_to_team(user, inviting_member):\n    member = TeamMember(user=user, team=self)\n    member.save()\n    notifications.send(user, "You are invited to the team")\n    return member')]):e._e(),3===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v('def can_invite_user_to_team(user, inviting_member):\n    if inviting_member.role != LEADER:\n        raise BusinessLogicException(\n            "You have to be a leader!", error_code=\'NOT_LEADER\')\n    if not user.has_game(self.game):\n        raise BusinessLogicException(\n            "User doesn\'t have this game!", error_code=\'NEED_GAME\')\n    return True\n\ndef invite_user_to_team(user, inviting_member):\n    member = TeamMember(user=user, team=self)\n    member.save()\n    notifications.send(user, "You are invited to the team")\n    return member')]):e._e(),4===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("# Usage\ndef invite_user_view(request):\n    # simplified, can be done using forms or serializers in API\n    member = TeamMember.objects.get(user_id=request.user.pk)\n    user = User.objects.get(pk=request.POST.get('user_pk'))\n    try:\n        if can_invite_user_to_team(user, member):\n            member = invite_user_to_team(user, member)\n            return HttpResponseRedirect('/team/')\n    except BusinessLogicException as e:\n        # template can use error message or error code\n        return HttpResponse(template, context={'error': e})\n")]):e._e()],1),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"3"}},[s("h2",[e._v("Can we do better?")]),2===e.step?s("h3",[e._v("Sure!")]):e._e(),3===e.step?s("h4",[e._v("Let's look into my "),s("strong",[e._v("python-business-logic")]),e._v(" package")]):e._e()]),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"6"}},[s("h2",[e._v("python-business-logic")]),1===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("from business_logic import validator, validated_by, LogicException\n\n@validator\ndef can_invite_user_to_team(user, inviting_member):\n    if inviting_member.role != LEADER:\n        raise LogicException(\n            \"You have to be a leader!\", error_code='NOT_LEADER')\n    ...\n\n@validated_by(can_invite_user_to_team)\ndef invite_user_to_team(user, inviting_member):\n    ...")]):e._e(),2===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("# automatic validation and exception raising\ninvite_user_to_team(user, inviting_member)\n\n# skip validation\ninvite_user_to_team(user, inviting_member, validate=False)")]):e._e(),3===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("# check if action can be performed\nresult = can_invite_user_to_team(\n    user, inviting_member,\n    raise_exception=False)\n\nif result:\n    print(\"Sure, you can invite him!\")\nelse:\n    assert result.error_code == 'NOT_LEADER'\n    # original exception raised, with all details\n    assert result.error")]):e._e(),4===e.step?s("div",[s("p",[e._v("Errors registry")]),s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v('from business_logic import LogicErrors\n\nclass TeamLogicErrors(LogicErrors):\n    # automatic error codes\n    NOT_LEADER = LogicException("You are not a team leader!")\n    NEED_GAME = LogicException("User doesn\'t have this game!")\n')]),s("p",[e._v("Usage")]),s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("@validator\ndef can_invite_user_to_team(user, inviting_member):\n  if inviting_member.role != LEADER:\n      raise TeamLogicErrors.NOT_LEADER")])],1):e._e(),5===e.step?s("div",[s("p",[e._v("Validators chaining")]),s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("@validator\ndef can_take_part_in_tournament(user, tournament):\n    if tournament.members.filter(user_pk=user.pk).exists()\n        raise TournamentErrors.ALREADY_IN_TOURNAMENT\n\n\n@validator\ndef can_invite_user_to_team(user, inviting_member):\n    ...\n    tournament = inviting_member.team.tournament\n    can_take_part_in_tournament(user, tournament)")])],1):e._e(),6===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("# Customized error messages\nclass TeamLogicErrors(LogicErrors):\n    NEED_GAME = LogicException(\"{user} doesn't have this game!\")\n\nraise TeamLogicErrors.NEED_GAME.format(user='John')\n")]):e._e()],1),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"2"}},[s("h2",[e._v("Want better? "),s("strong",[e._v("Middleware")]),e._v("!")]),1===e.step?s("h4",[e._v("It allows you to handle exceptions transparently, and code only happy path")]):e._e(),2===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v('def handle_api_exception(exception, context):\n    if isinstance(exception, LogicException):\n        # ParseError from Django Rest Framework\n        exception = ParseError(f"Invalid operation: {exception}")\n    return default_exception_handler(exception, context)\n')]):e._e()],1),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut",steps:"4"}},[s("h2",[e._v("Full example from pvpc.eu")]),1===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("@validator\ndef can_invite_user_to_team(by_member, user=None):\n    if not by_member.privileged:\n        raise TournamentErrorCodes.NOT_TEAM_CREATOR\n    if by_member.team.full:\n        raise TournamentErrorCodes.TEAM_FULL\n    if by_member.team.type == TournamentTeam.FREE_AGENT:\n        raise TournamentErrorCodes.CANT_INVITE_TO_FREE_AGENT_TEAM\n    if user:\n        can_join_tournament_team(user, by_member.team)\n    can_modify_team_members(by_member.team)\n")]):e._e(),2===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("@validated_by(can_invite_user_to_team)\ndef invite_user_to_team(by_member, user):\n  notification_code = 'tournament.team.invitation.received'\n  notify(notification_code, user, by_member.team, by_member.user)\n  logger.info(\"User has been invited to the tournament team\")\n  return TournamentTeamMember.objects.create(\n      user=user, team=by_member.team)\n")]):e._e(),3===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("class TournamentTeamMemberSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = models.TournamentTeamMember\n        fields = ('pk', 'user', 'team')\n\n    def create(self, validated_data):\n        current_user = self.context['request'].user\n        by_member = (\n            models.TournamentTeamMember.objects\n            .filter(user=current_user, team=validated_data['team'])\n            .first())\n        if not by_member:\n            raise NotPermittedException(\"Must be a team member!\")\n        return services.invite_user_to_team(\n            by_member, user=validated_data['user'])\n")]):e._e(),4===e.step?s("highlight-code",{staticClass:"eg-code-block code-box",attrs:{lang:"python"}},[e._v("def test_cannot_invite_user_to_team_if_free_agent(self):\n    user = UserFactory()\n    member = TournamentTeamCreatorFactory(\n        team__type=TournamentTeam.FREE_AGENT)\n    expected = TournamentErrorCodes.CANT_INVITE_TO_FREE_AGENT_TEAM\n    with self.shouldRaiseException(expected):\n        services.can_invite_user_to_team(member, user)\n\n")]):e._e()],1),s("slide",{attrs:{enter:"fadeIn",leave:"fadeOut"}},[s("h2",[e._v("Questions?")]),s("div",{staticClass:"u-text-centered"},[s("h4",[s("a",{attrs:{href:"https://github.com/Valian/python-business-logic"}},[e._v("github.com/Valian/python-business-logic")])]),s("h4",[e._v("Twitter @jskalc")]),s("h4",[e._v("LinkedIn "),s("a",{attrs:{href:"https://www.linkedin.com/in/jskalec/"}},[e._v("Jakub Skałecki")])]),s("h4",[e._v("Blog "),s("a",{attrs:{href:"https://rock-it.pl"}},[e._v("rock-it.pl")])])])])],1)])},staticRenderFns:[]}},201:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},5:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=s(a),r=n(202),o=s(r),l=n(199),_=s(l);i.default.use(o.default);var m=[{path:"*",component:_.default}];t.default=new o.default({mode:"history",routes:m})},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){}},[13]);