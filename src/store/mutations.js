export default {
  SET_ALL_WORDS(state, data) {
    state.cardList = data;
    console.log('저장된 리스트', state.cardList);
  },

  SET_DESC(state, data) {
    console.log('SET_DESC:', data)
    
    if(data.status == 'add'){
    // state.meaning.description= data.description;
    state.card.meanings[data.index] = {description: data.description, example:[]}
    // state.card.meanings.push( state.meaning);
    // Vue.set(state.card.meanings, data.index, state.meaning);

  }else if(data.status == 'remove'){
    state.meaning.description= '';
    state.card.meanings.splice(data.index, 1);
  }else{
    return
  }
    console.log(state.card.meanings)
  

  }
}

