<template>
  <v-fade-transition class="ee">
    <section>
      <div class="form-card">
        <div class="icon-button-wrapper">
          <v-icon @click="closeForm()" aria-hidden="false">
            mdi-close-thick</v-icon
          >
        </div>
        <div class="form-inside">
          <div class="line">
            <v-text-field label="Word" solo></v-text-field>
          </div>
          <div class="line">
            <v-text-field label="Transcription" solo></v-text-field>
          </div>
          <div class="line">
           
              <Meaning></Meaning>
              
           
          </div>
        </div>
      </div>
    </section>
  </v-fade-transition>
</template>
<script>
import Meaning from './Meaning';
export default {
  props: ['card'],
  data() {
    return {
      isCloseClicked: false,

    };
  },
  components: {
    Meaning,
  },
  computed: {
    // computeEx() {
    // const example = document.getElementById('ex_1')
    // }
  },
  methods: {
    closeForm() {
      this.$emit('closeForm', this.isCloseClicked);
    },
  },
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
    z-index: 999;
    top: 5vw;
    position: absolute;

    .form-inside{
    width: 100%;
    padding: 5vw;


      .line{

        .expandable{
    // display: flex;
    // justify-content: space-between;

    .icon-button-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 30px;

      .v-icon{

    padding: 0 0 15px 0;
    cursor: pointer;
    font-size: 30px;
    color: #bccbce;


      }

      .description-add{
            color: #84c8d6;
      }
        }
      }
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
}
</style>
