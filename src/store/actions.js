import axios from 'axios'
import {apiUrl} from '../api/index'
// import * as Util from '../utils/Util'

export default {
  fetchWords ( {commit}) {
    axios
      .get(apiUrl.getWords)
      .then( ({data}) => {
        console.log(data);
        commit('SET_ALL_WORDS', data);
      })
      .catch( err => console.log(err))
  },


  computeDescription ( {commit}, e ) {
    commit('SET_DESC', e)
  },
  computeExample ( {commit}, e ) {
    commit('SET_EX', e)
  },
  setACard({commit}, e) {
    commit('SET_A_CARD', e);
    
  },
  postACard({commit},e) {
    console.log('postACard:', e);
    axios
      .post(apiUrl.postWords, e)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
        commit();
  }
}