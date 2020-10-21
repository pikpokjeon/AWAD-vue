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
  }
}