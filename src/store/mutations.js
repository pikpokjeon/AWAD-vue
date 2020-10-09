export default {
  SET_ALL_WORDS (state, data){
    state.cardList = data;
    console.log('저장된 리스트', state.cardList);
  }
}