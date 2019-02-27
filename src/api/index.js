import axios from 'axios';
import { firestore } from '@/firebase/firestore'


function fetchItem({ commit }, itemId) {
  /*
  return firestore
  .collection('Post')
  .doc(itemId)
  .get()
  .then(res => commit('SET_ITEM', res.data))
  .catch((err) => {
    console.error(`getPost error: ${err}`)
  })
  */
}

export {
  fetchItem
}

