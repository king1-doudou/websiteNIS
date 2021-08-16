import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    userName: 'ADMIN',
  },
  mutations: {
    login(state, isLogin) {
      state.isLogin = isLogin
    },
    setUserName(state, userName) {
      state.userName = userName
    }
  },
  actions: {
    loginAction({ commit }, isLogin) {
      commit('login', isLogin)
    },
    setUserNameAction({ commit }, userName) {
      commit('setUserName', userName)
    },
  },
  modules: {},
});
