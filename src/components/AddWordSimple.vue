<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
    <h2>Any new word?</h2>
    <v-text-field 
    v-model="initNewWord"
    solo
    placeholder="New Word"></v-text-field>
    </v-col>
   <v-col
      cols="12"
      sm="1"
    >
    <v-btn
    @click="addWord()"
  color="white"
  elevation="3"
  large
>Add</v-btn>
<NewCardForm class="form" v-if="isOpenForm" @closeForm="checkIfClose" @postCardSuccessful="cardPostResult">

</NewCardForm>
</v-col>
  </v-row>
</template>
<script>
import NewCardForm from './NewCardForm';
import { mapActions } from 'vuex';
export default {
  components:{
    NewCardForm,
  },
  data(){
    return{
      isOpenForm:false,
      initNewWord: '',
    }
  },
  methods:{
    ...mapActions(['computeInitNewWord']),

    addWord() {
      this.isOpenForm = !this.isOpenForm;
      this.computeInitNewWord(this.initNewWord)
    },
    checkIfClose(e) {
      this.isOpenForm = e ;

    },
    setInitNewWord(){
      // this.computeInitNewWord(this.initNewWord);
    },
    cardPostResult(e) {
      console.log('cardPostResult : ', e);
      e ? this.isOpenForm = false : true ;
    }
  }
  
}
</script>
<style lang="scss" scoped>
.row {
    justify-content: center;
    align-items: center;
    padding-top: 100px;
}
h2{
  font-size: 20px;
  color: white;
}
.form{
    position: fixed;
    width: 100%;
    min-height: 100%;
    background: #0c2b527d;
    z-index: 99;
    top: 0;
    left: 0;
    overflow-y: scroll;
}
</style>