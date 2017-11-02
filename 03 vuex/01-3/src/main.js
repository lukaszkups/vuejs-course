import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

new Vue({
  el: '#app',
  store, // ES6 store: store equivalent
  render: h => h(App)
})
