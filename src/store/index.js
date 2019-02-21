import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import { firebaseAuth } from '@/firebase/firebaseAuth'

Vue.use(Vuex);

const state = {
  user: null
}

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    state.user = user
  } else {
    state.user = null
  }
})

export const store = new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions,
});
