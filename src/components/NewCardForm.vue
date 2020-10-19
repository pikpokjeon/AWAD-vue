<template>
   <v-fade-transition class="ee">
<section>
<div class="form-card">
  <div class="icon-button-wrapper"><v-icon @click="closeForm()" aria-hidden="false"> mdi-close-thick</v-icon></div>
<div class="form-inside">
  <div class="line">
    <v-text-field label="Word"></v-text-field>
  </div>
<div class="line">
    <v-text-field label="Transcription"></v-text-field>
  </div>


</div>
</div>

</section>
   </v-fade-transition>
</template>
<script>
export default {
  props: ["card"],
  data() {
    return {
      isCloseClicked: false,
    };
  },
  computed: {
    // computeEx() {
      // const example = document.getElementById('ex_1')
    // }
  },
  methods: {
    closeForm(){
      this.$emit('closeForm',this.isCloseClicked);
    }

  }
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
.form-card {
    background: white;
    min-width: 650px;
    height: 500px;
    z-index: 999;
    top: 5vw;
    position: absolute;

    .form-inside{
    width: 100%;
    padding: 5vw;


      .line{}
    }
}
.icon-button-wrapper {
  display: flex;
      justify-content: flex-end;
      
      .v-icon{
            padding: 10px;
            cursor: pointer;

      }
}

</style>
