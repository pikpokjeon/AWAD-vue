<template>

    <dl class="card">
      <div class="button-list">
        <span>1</span>
        <span>2</span>
        <v-icon aria-hidden="false">
  mdi-account
</v-icon>
      </div>

      <dt class="word">{{card.theword}}</dt>
      <dd>
        <ol>
          
          <li>
            <p class="trans">{{card.transcription}}</p>
          </li>
         
          <li>
            <ul class="meanings" v-for="(el, index) in card.meanings" :key="index">
             <li class="description">{{el.description}}</li>
             <li class="example">{{el.examples}}</li>
            </ul>
          </li>
          <li>
          <ul class="tags" >
            <li v-for="(tag,index) in card.tags" :key="`_${index}`">{{tag}}</li>
          </ul>
          </li>
        </ol>
      </dd>

    </dl>
</template>
<script>
  export default {
    props:['card'],

  }
</script>
<style lang="scss" scoped>
.card {
    min-width: 350px;
    width: 25%;
    display: inline-block;
    border-radius: 5px;
    background: white;
    margin: 1%;
    box-shadow: 0 35px 144px -79px rgba(0, 0, 0, 0.65);
    padding: 2% 2%;
    border: 1px solid #f1f1f1;
  .button-list{
    span{

    }

  }
  .word{

  }
  dd{

  }
  ol{
        list-style: none;
    li{
      .trans{

      }
    }

    .meanings{
      .description{

      }
      .example{

      }

    }
    .tags{
      li{

      }
    }
  }
}

</style>
