<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto" max-width="344">
        <div v-if="isImportant" class="star-it"></div>
        <dl class="card">
          <!-- <div class="right-box">
          <v-icon color="rgb(193 192 187)" class="star" aria-hidden="false"> mdi-star-box   </v-icon>                
          </div> -->
          <dt class="word" :class="{'important' : isImportant}">{{ card.theword }}</dt>

          <dd>
            <ol>
              <li>
                <p class="trans">{{ card.transcription }}</p>
              </li>

              <li>
                <ul
                  class="meanings"
                  v-for="(el, index) in card.meanings"
                  :key="index"
                >
                  <li class="description">{{ el.description }}</li>
                  <li v-for="(ex,index) in el.examples" class="example" :key="`ex_${index}`">{{ex}}</li>
                </ul>
              </li>
              <li>
                <ul class="tags">
                  <li v-for="(tag, index) in card.tags" :key="`_${index}`">
                    {{ tag }}
                  </li>
                </ul>
              </li>
            </ol>
          </dd>
        </dl>

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#144254">
            <div class="icon-button-wrapper">
            <div class="icon-button">
            <v-icon  aria-hidden="false"> mdi-delete-forever</v-icon>
            </div>
            <div class="icon-button">
            <v-icon  aria-hidden="false"> mdi-file-edit  </v-icon>              
            </div>
            <div class="icon-button">

          <v-icon class="star" @click="setImportant()"  aria-hidden="false"> mdi-star-box-outline    </v-icon>                
            </div>

            </div>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
export default {
  props: ["card"],
  data() {
    return {
      overlay: false,
      isImportant:false,
    };
  },
  computed: {
    // computeEx() {
      // const example = document.getElementById('ex_1')
    // }
  },
  methods: {
    remove() {

    },
    edit() {

    },
    setImportant() {
      this.isImportant = !this.isImportant;  

      }
    
  }
};
</script>
<style lang="scss" scoped>
.star-it{
  position:absolute;
}
.v-card {
  margin: 20px auto !important;
}
.card {
  // min-width: 350px;
  // width: 25%;
  // display: inline-block;
  // border-radius: 5px;
  // background: white;
  // margin: ;
  // box-shadow: 0 35px 144px -79px rgba(0, 0, 0, 0.65);
  padding:1.5vw 1.5vw 1.5vw 2vw;
      min-width: 350px;
    min-height: 250px;

 .right-box{
   float: right;

 }

  .button-list {
    span {
    }
  }
  .important {
    border-left: 5px solid;
  }
  .word {
    font-size: 1.5rem;
    font-weight: 500;
    color: #4d42a7;
  }
  dd {
  }


  ol {
    padding-left: 0;
    list-style: none;
    li {
      .trans {
        font-size: 0.9rem;
            color: #848b93;
      }
    }

    .meanings {
          list-style: none;
    margin-bottom: 18px;
    padding-left: 0;
      
      .description {
        font-size: 1rem;
      }
      .example {
                color: #5f6973;
    white-space: pre-wrap;
    border-left: 1px solid #c3c5c7;
    padding-left: 0.7vw;
    padding-top: 0.3vw;
        font-size: 0.9rem;
      }
    }
    .tags {
          padding-left: 1vw;
    list-style: none;
      li {
        display: inline-block;
    color: #5f59db;
      }
    }
  }
}

.icon-button-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-button{
    padding:10px;

    .v-icon{
    font-size: 2.5rem;    
    cursor: pointer;

    }
  }
}
</style>
