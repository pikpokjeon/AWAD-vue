<template>
     
<section>
  <div class="form-card">
dddddd
  </div>
</section>
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
}

</style>
