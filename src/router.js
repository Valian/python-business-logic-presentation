import Vue from 'vue'
import Router from 'vue-router'

import slideshows from './slideshows/slideshows'
import Home from './Home'

Vue.use(Router)

const routes = [
  ...slideshows.list.map(slideshow => ({
    path: '/' + slideshow.infos.path,
    component: slideshow
  })),
  { path: '*', component: Home }
]

export default new Router({
  mode: 'history',
  routes
})
