import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

Vue.use(Vuex);

// We should always have central store when we merge our module stores
export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters: {
    value: state => {
      return state.value;
    }
  },
  mutations: {
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: {
    // increment: context => {
    //   context.commit('increment');
    // },
    // or we can write with ES6 destruct method:
    updateValue: ({commit}, payload) => {
      commit('updateValue', payload);
    }
  },
  modules: {
    // this is a ES6 shorthand for counter: counter
    counter
  }
});
