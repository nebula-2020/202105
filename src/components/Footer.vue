/* eslint-disable no-unused-vars */
<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      overflowY: false,
    };
  },
  components: {},
  mounted() {},
  modules: {},
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  padding: 30px 20px;
  min-height: 100px;
  background-color: var(--dark-bg-color);
  color: var(--dark-highlight-color);
}
img {
  height: 1em;
}
</style>