import { firebaseAuth } from '@/firebase/firebaseAuth'
import { firestore } from '@/firebase/firestore'

import {
  fetchItem
} from '../api/'

export default {
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
  logout () {
    firebaseAuth
    .signOut()
    .then()
    .catch((error) => console.error(`SingOut Error: ${error}`))
  }
}