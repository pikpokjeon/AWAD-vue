<template>
<div>
    <div class="expandable" > 
      <v-text-field
        label="Example"
      ></v-text-field>
    
    <div class="icon-button-wrapper">
      <v-icon class="description-add" @click="addEx()" aria-hidden="false">
        mdi-plus-circle</v-icon
      >      
      <v-icon @click="removeEx()" aria-hidden="false"> mdi-minus-circle-outline </v-icon>
    </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdded: false,
    };
  },
  methods:{
    addEx(){
      this.$emit('addEx', true)
    },
    removeEx(){

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
