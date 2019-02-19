import {
  fetchPost
} from '../api/'

export default {
  FETCH_POST({ commit }) {
    return fetchPost().then(response => commit('SET_POST', response.data));
  }
}