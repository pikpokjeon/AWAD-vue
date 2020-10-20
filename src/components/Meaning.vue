<template>
<div>
  <div class="expandable"  
  v-for="(desc, index) in descCount"
        :key="`desc_${index}`">
    <div class="inputs">
      <v-text-field label="Description"></v-text-field>
      <v-text-field
        v-for="(example, index) in examples"
        :key="`ex_${index}`"
        label="Example"
      ></v-text-field>
    </div>
    <div class="icon-button-wrapper">
      <v-icon class="description-add" @click="addDesc()" aria-hidden="false">
        mdi-plus-circle</v-icon
      >
      <v-icon @click="closeForm()" aria-hidden="false"> mdi-plus-circle</v-icon>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examples: [1,],
      descCount: [1,],
    };
  },
  methods:{
    addDesc(){
      this.descCount.push(1);
    },
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
