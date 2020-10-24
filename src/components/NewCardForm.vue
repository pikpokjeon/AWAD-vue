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
            <v-text-field  v-model="word" label="Word" solo ></v-text-field>
          </div>
          <div class="line">
            <v-text-field label="#Tags #As #You #Want" solo></v-text-field>
          </div>
          <div class="line">
            <Meaning
              v-for="(el, index) in descList"
              :id="`desc_${index + 1}`"
              :key="`desc_${index + 1}`"
              :length="descList.length"
              :index="index"
              :list="descList"
              @computeDescItem="computeDescToAdd"
            ></Meaning>
            <div class="my-2">
              <v-btn color="error" dark large @click="saveCard('submit')">
                Submit
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  </v-fade-transition>
</template>
<script>
import Meaning from './Meaning';
import { mapState, mapActions } from 'vuex';
import axios from 'axios'
import {apiUrl} from '../api/index'

export default {
  data() {
    return {
      isCloseClicked: false,
      descList: [0,],
      word:'',
    };
  },
  components: {
    Meaning,
  },
  computed: {
    ...mapState(['cardList','card']),
    theWord(){
      const word = this.newWord ? this.newWord : this.word;
      return word;
    }

    // computeEx() {
    // const example = document.getElementById('ex_1')
    // }
  },
  methods: {
    ...mapActions(['setACard','postACard']),

    computeDescToAdd({ index, val }) {
      if (val) {
        this.descList.push(index);
        console.log('add :');
      } else {
        console.log('delete :');
      }
    },
    closeForm() {
      this.$emit('closeForm', this.isCloseClicked);
    },
    async saveCard(e) {
      const param = { status: e, theword: this.theWord} ;
      await this.setACard(param);
      const postACard = await this.postACard(this.card);
      
      // console.log(`${this.$refs.desc}-${index}`.value);
    },
    async postACard(e) {
      const result = await axios.post(apiUrl.postWords, e);
      console.log('postACard result :', result);
      if(result.status == 201){
        this.$emit('SUCCESS', true)
      }
    }
    //     saveCard(e) {
    //   const param = { status: e, theword: this.theWord} ;
    //     this.setACard(param)
    //       .then(this.postACard(this.card))
    //       .then( result => console.log('saveCard result :',result))
    //       .catch(e => console.log('saveCard error :', e))
      
    //   // console.log(`${this.$refs.desc}-${index}`.value);
    // },

  },
  mounted(){ //html이 랜더링 된 시점에 보여줘야 해서 created가 아닌 mounted에
      this.word = this.card.theword;
      console.log('this.word : ',this.word)
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
  z-index: 999;
  top: 5vw;
  position: absolute;

  .form-inside {
    width: 100%;
    padding: 5vw;

    .line {
      .expandable {
        // display: flex;
        // justify-content: space-between;

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
    }
  }
  .icon-button-wrapper {
    display: flex;
    justify-content: flex-end;

    .v-icon {
      padding: 10px;
      cursor: pointer;
    }
  }
}
</style>
