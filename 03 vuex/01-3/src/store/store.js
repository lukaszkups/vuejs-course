import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

// We should always have central store when we merge our module stores
export const store = new Vuex.Store({
  state: {
    value: 0
  },
  // getters: {
    // value: state => {
    //   return state.value;
    // }
  // },
  // mutations: {
  // },
  // actions: {
  // },
  getters,
  actions,
  mutations,
  modules: {
    // this is a ES6 shorthand for counter: counter
    counter
  }
});
