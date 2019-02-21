import { firebaseAuth } from '@/firebase/firebaseAuth'

import {
  fetchPost
} from '../api/'

export default {
  FETCH_POST({ commit }) {
    return fetchPost().then(response => commit('SET_POST', response.data));
  },
  logout () {
    firebaseAuth
      .signOut()
      .then()
      .catch((error) => console.error(`SingOut Error: ${error}`))
  }
}