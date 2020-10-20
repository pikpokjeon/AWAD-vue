<template>
<div>
  <div class="expandable"  
  v-for="(desc, index) in descCount"
        :key="`desc_${index}`">
    <div class="inputs">
      <v-text-field label="Description"></v-text-field>
     
    </div>
    <div class="icon-button-wrapper">
      <v-icon class="description-add" @click="addDesc()" aria-hidden="false">
        mdi-plus-circle</v-icon
      >     
      <v-icon @click="closeForm()" aria-hidden="false"> mdi-plus-circle</v-icon>
    </div>
  </div>
   <Example  @addEx="expandEx" @removeEx="removeEx"  v-for="(example, index) in examples" :id="index" :key="`ex_${index}`"></Example>
  </div>
</template>

<script>
import Example from './Example';
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
  methods:{
    addDesc(){
      this.descCount.push(1);
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
