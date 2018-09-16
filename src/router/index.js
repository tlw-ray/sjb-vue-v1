import Vue from 'vue'
import Router from 'vue-router'
import Navigator from '../components/Navigator'
import Login from '../components/Login'
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
    }
  ]
})
