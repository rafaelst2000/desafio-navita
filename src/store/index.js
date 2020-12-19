import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedBrand: {}
  },
  mutations: {
    SET_BRAND(state, payload) {
      state.selectedBrand = payload;
    }
  },
  actions: {},
  modules: {}
});
