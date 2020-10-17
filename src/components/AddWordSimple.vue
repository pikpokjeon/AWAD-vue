<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
    <h2>What have you learn?</h2>
    <v-text-field label="Learn something new?" 
    solo
    placeholder="New Word"></v-text-field>
    </v-col>
   <v-col
      cols="12"
      sm="1"
    >
    <v-btn
  color="white"
  elevation="3"
  large
>Add</v-btn>
</v-col>
  </v-row>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.row {
    justify-content: center;
    align-items: center;
    padding-top: 50px;
}
h2{
  font-size: 20px;
  color: white;
}
</style>