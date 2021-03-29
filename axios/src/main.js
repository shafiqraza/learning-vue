import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vueaxious-ca1aa-default-rtdb.firebaseio.com'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
