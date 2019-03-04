import { firebaseAuth } from '@/firebase/firebaseAuth'
import { firestore } from '@/firebase/firestore'
/*
import {
  fetchItem
} from '../api/'
*/
export default {
  FETCH_POSTS({ commit }) {
    return firestore.collection('Post').where('show', '==', true)
    .orderBy('date', 'desc').onSnapshot((postsRef) => {
      const posts = [];
      postsRef.forEach((doc) => {
        const post = doc.data();
        post.idx = doc.id;
        posts.push(post)
      });
      commit('SET_POSTS', posts)
    })
  },
  FETCH_ITEM({ commit }, itemId) {
    return firestore
    .collection('Post')
    .doc(itemId)
    .get()
    .then((result) => {
      commit('SET_ITEM', result.data())
    }).catch((err) => {
      console.error(`getPost error: ${err}`)
    })
  },
  WRITE_POST(getUser) {
  
  },
  logout () {
    firebaseAuth
    .signOut()
    .then((result) => {
      
      user = []
    })
    .catch((error) => console.error(`SingOut Error: ${error}`))
  }
}