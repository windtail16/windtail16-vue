import axios from 'axios';
import { firestore } from '@/firebase/firestore'

const api = {
  post: firestore.collection('Post').where('show', '==', true).orderBy('date', 'desc')
}

function fetchPost() {
  // console.log(api.post);
  return api.post
}

export {
  fetchPost,
}

