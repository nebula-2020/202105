<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png"/>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style scoped>
.container {
  min-height: 100px;
  padding: 30px 20px;
  background-color: var(--dark-bg-color);
  color: var(--dark-highlight-color);
}
img{
    height: 1em;
}
</style>