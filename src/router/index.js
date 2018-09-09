import Vue from 'vue'
import Router from 'vue-router'
import Navigator from '../components/Navigator'
import Login from '../components/Login'
import Logged from '../components/Logged'
import Hall from '../components/Hall'
import ONKRoom from '../components/onk/Room'
import ONKConfig from '../components/onk/config'
import SJBRoom from '../components/sjb/Room'
import Index from '../components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navigator',
      component: Navigator
    }, {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/logged',
      name: 'Logged',
      component: Logged
    }, {
      path: '/hall',
      name: 'Hall',
      component: Hall
    }, {
      path: '/onk/room',
      name: 'ONKRoom',
      component: ONKRoom
    }, {
      path: '/onk/config',
      name: 'ONK_Config',
      component: ONKConfig
    }, {
      path: '/sjb/room',
      name: 'SJB_Room',
      component: SJBRoom
    }
  ]
})
