<template>
<div>
    <v-text-field label="Description"></v-text-field>    
    <v-text-field v-for="(example, index) in examples" :key="`ex_${index}`" label="Example"></v-text-field>

</div>

</template>

<script>
export default {
  data() {
    return{
      examples:[1,]
    }
  }
  
}
</script>

<style lang="scss" scoped>
div {
  width:100%;
}

</style>