<template>
  <v-app id="app">
    <v-app-bar
      app
      color="rgb(63 81 181 / 23%)"
      dark
    >
      <div class="d-flex align-center">
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.v-main {
  padding:0 !important;
}
.gradient {
    background: linear-gradient(222deg, #8d18ff, #18ffaf);
    background-size: 400% 400%;

    -webkit-animation: bg 30s ease infinite;
    -moz-animation: bg 30s ease infinite;
    animation: bg 30s ease infinite;
}

@-webkit-keyframes bg {
    0%{background-position:0% 78%}
    50%{background-position:100% 23%}
    100%{background-position:0% 78%}
}
@-moz-keyframes bg {
    0%{background-position:0% 78%}
    50%{background-position:100% 23%}
    100%{background-position:0% 78%}
}
@keyframes bg {
      0%{background-position:0% 78%}
    50%{background-position:100% 23%}
    100%{background-position:0% 78%}
}





</style>
