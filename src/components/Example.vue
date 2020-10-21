<template>
<div>
    <div class="expandable"  v-for="(example, index) in el" :key="`ex_${index}`"> 
      <!-- <span>{{`${index + 1})`}}</span> -->
      <v-text-field
      v-model="value"
       
        :placeholder="`${index + 1})Example`"
      ></v-text-field>
    
    <div class="icon-button-wrapper">
      <v-icon v-if="index == 0" class="description-add" @click="addEx()" aria-hidden="false">
        mdi-plus-circle-outline</v-icon
      >      
      <v-icon v-else @click="removeEx()" aria-hidden="false"> mdi-minus-circle-outline </v-icon>
    </div>
</div>
  </div>
</template>

<script>
export default {
  props:['id', 'isFirst','count','index','el'],
  data() {
    return {
      isAdded: false,
      value:'',
    };
  },
  computed:{
    computedInfo(){
      const info = {idx:this.id, value: this.value};
      return info;
    },
    isFirstEx(){
      let val;
      if(this.index == 0){
        val = true;
      }else{
        val = false;
      }
      return val;
    }

  },
  methods:{
    addEx(){
      this.$emit('addEx', this.computedInfo);
      console.log('example adding: ', this.computedInfo);
    },
    removeEx(){
      this.$emit('removeEx',this.computedInfo);
      console.log('example removing: ', this.computedInfo);

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
    align-items: center;
        padding-left: 10px;
    border-left: 1px solid #bccbce;

    span{
      padding-right: 5px;
    }

  .inputs {
        display: flex;
    align-items: center;
  }

  .icon-button-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 30px;

    .v-icon {
      padding: 0 0 15px 0;
      cursor: pointer;
      font-size: 35px;
      color: #bccbce7a;
    }

    .description-add {
          color: #84c8d694;
    }
  }
}
</style>
