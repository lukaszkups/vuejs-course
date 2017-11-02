const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => { // state is always passed to the getters
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + ' Clicks';
  }
};

const mutations = {
  increment: (state, payload) => { // like in getters, state is always passed
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  increment: ({commit}, payload) => {
    commit('increment', payload);
  },
  decrement: ({commit}, payload) => {
    commit('decrement', payload);
  },
  asyncIncrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.duration);
  },
  asyncDecrement: ({commit}, payload) => {
    setTimeout(() => {
      commit('decrement', payload.by);
    }, payload.duration);
  }
};

export default {
  state, // ES6 short syntax for state: state etc.
  mutations,
  actions,
  getters
};
