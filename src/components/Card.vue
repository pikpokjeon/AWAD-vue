<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto" max-width="344">
        <dl class="card">
          <div class="button-list">
            <span>1</span>
            <span>2</span>
          </div>

          <dt class="word">{{ card.theword }}</dt>
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
      
    }
  }
};
</script>
<style lang="scss" scoped>
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
  padding: 1.5vw;
  // border: 1px solid #f1f1f1;


  .button-list {
    span {
    }
  }
  .word {
        font-size: 1.5rem;
    font-weight: 500;
  }
  dd {
  }


  ol {
    padding-left: 1vw;
    list-style: none;
    li {
      .trans {
      }
    }

    .meanings {
          list-style: none;
    border-left: 1px solid #c3c5c7;
    margin-bottom: 10px;
      
      .description {
      }
      .example {
            color: #5f6973;
             white-space: pre-wrap;
      }
    }
    .tags {
      li {
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
