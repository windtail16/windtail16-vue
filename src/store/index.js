import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const Store = new Vuex.Store({
  state: {
    message : 'hello world'
  },
  getters: {

  }
});