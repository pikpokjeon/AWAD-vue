<template>
<div>
  <div  v-for="(desc, index) in descCount"
        :key="`desc_${index + 1}`">
  <div class="expandable"  
>
    <div class="inputs">
      <span>{{`${index + 1}.`}}</span>
      <v-text-field label="Description"></v-text-field>
     
    </div>
    <div class="icon-button-wrapper">
      <v-icon v-if="index == 0" class="description-add" @click="addDesc()" aria-hidden="false">
        mdi-plus-circle</v-icon
      >     
      <v-icon @click="removeDesc()" aria-hidden="false"> mdi-minus-circle-outline</v-icon>
    </div>
  </div>
   <Example  @addEx="expandEx" @removeEx="removeEx"  v-for="(example, index) in examples"
    :added="isExAdded" :count="examples.length"
    :id="example" :index="index" :key="`ex_${index}`"></Example>
  </div>
  </div>
</template>

<script>
import Example from './Example';
// import {mapState} from 'vuex';
export default {
  data() {
    return {
      examples: ['s',],
      descCount: ['s',],
      addedDesc: false,
    };
  },
  components: {
    Example,
  },
  computed:{
        isFirst(){
      let val;
      if(this.id == 's'){
        val = true;
      }else{
        val = false;
      }
      return val;
    },
    isExAdded(){
    if(this.examples.length > 1){
      return true
    }else{
      return false
    }

    }
  },
  methods:{
    addDesc(){
      this.descCount.push(1);
    },
    removeDesc(){

    },
    expandEx(e) {
   
        this.examples.push(e);
     
    },
    removeEx(e) {
        this.examples.splice(e,1);
      
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
}
.expandable {
  display: flex;
  justify-content: space-between;

  .inputs {
    display: block;
  }

  .icon-button-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 30px;

    .v-icon {
      padding: 0 0 15px 0;
      cursor: pointer;
      font-size: 30px;
      color: #bccbce;
    }

    .description-add {
      color: #84c8d6;
    }
  }
}
</style>
