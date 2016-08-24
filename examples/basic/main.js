import './main.scss'

import Vue from 'vue'

import store from './js/store'
import App from './js/App'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
