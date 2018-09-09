// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8080'
axios.get('/hello').then((response) => {
  console.log(response.data)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
