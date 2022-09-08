import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    emailText: null,
    messageText: null,
  },
  mutations: {
    setState(state, { data }) {
      state.messageText = data.messageText;
      state.emailText = data.emailText;
    },
  },
  actions: {
    setState(context, payload) {
      context.commit('setState', payload);
    },
  },
});
export default store;
