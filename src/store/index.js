import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import { firebaseAuth } from '@/firebase/firebaseAuth'
import { firestore } from '@/firebase/firestore'

Vue.use(Vuex);

const state = {
  user: null,
  posts: firestore.collection('Post').onSnapshot((postsRef) => {
    const posts = [];
    postsRef.forEach((doc) => {
      const post = doc.data();
      post.idx = doc.id;
      
      posts.push(post)
    });
    state.posts = posts
  }),
  db: firestore
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
