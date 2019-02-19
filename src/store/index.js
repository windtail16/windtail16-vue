import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import { firebaseAuth } from '@/firebase/firebaseAuth'

Vue.use(Vuex);

export const Store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    message : 'hello vuex store',
    post:[],
  },
  getters,
  mutations,
  actions,
});