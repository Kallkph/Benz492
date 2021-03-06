import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'
import jQuery from 'jquery'
import '../dist/css/style.css'

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false
Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.component('Profiletag', require('./components/Profiletag.vue').default)
Vue.component('Login', require('./components/Login.vue').default)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
