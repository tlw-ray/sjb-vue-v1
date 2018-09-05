import Vue from 'vue'
import Router from 'vue-router'
import Navigator from '../components/Navigator'
import Login from '../components/Login'
import Logged from '../components/Logged'
import Corridor from '../components/Corridor'
import ONKZoom from '../components/onk/zoom'
import ONKConfig from '../components/onk/config'
import SJBZoom from '../components/sjb/zoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Navigator
    }, {
      path: '/navigator',
      name: 'Navigator',
      component: Login
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/logged',
      name: 'Logged',
      component: Logged
    }, {
      path: '/corridor',
      name: 'Corridor',
      component: Corridor
    }, {
      path: '/onk/zoom',
      name: 'ONKZoom',
      component: ONKZoom
    }, {
      path: '/onk/config',
      name: 'ONK_Config',
      component: ONKConfig
    }, {
      path: '/sjb/zoom',
      name: 'SJB_Zoom',
      component: SJBZoom
    }
  ]
})
