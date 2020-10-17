<template>
<v-app>
  <v-main>
  <!-- upper search part -->

<div class="upper">
  <v-container >
  <AddWordSimple ></AddWordSimple>
  </v-container>
</div>
<!-- card list part -->
<v-container class="cardList">
  <Card v-for="card in cardList" :key="card.id" :card="card" ></Card>
</v-container>


  </v-main>
</v-app>  
</template>
<script>
import Card from '../components/Card';
import AddWordSimple from '../components/AddWordSimple'
import {mapActions, mapState} from 'vuex';
export default {
  components: {
    Card,
    AddWordSimple
  },
  computed: {
    ...mapState(['cardList']),
  },
  methods:{
    ...mapActions(['fetchWords']),
  },
  created() {
    this.fetchWords(),
    console.log(this.cardList);
  }
  
}
</script>
<style lang="scss" scoped>
.cardList {
    width: 90%;
    display: flex;
    // border: 1px solid;
    margin: auto;
    align-items: baseline;
    justify-content: center;
        flex-wrap: wrap;
            position: absolute;
    top: 250px;
    left: 20%
}

  

.upper {
  width:100%;
  // background: black;
  background: linear-gradient(144deg, rgba(23,64,190,1) 0%, rgba(107,57,194,1) 75%, rgba(162,53,196,1) 93%, rgba(220,0,255,1) 100%);
  top: 0;
  height: 400px;
}

.v-main {
  padding:0;
}

.topAdd {
  padding-top: 100px;
}

</style>