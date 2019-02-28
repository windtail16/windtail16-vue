import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import { firebaseAuth } from '@/firebase/firebaseAuth'
import { firestore } from '@/firebase/firestore'

Vue.use(Vuex);

let adminEmail = 'sanghoonbae16@gmail.com'

const state = {
  user: null,
  admin: false,
  posts: [],
  item: []
}

firebaseAuth.onAuthStateChanged((user) => {
  if (user) {
    state.user = user
    if (user.email === adminEmail) {
      state.admin = true
    }
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
