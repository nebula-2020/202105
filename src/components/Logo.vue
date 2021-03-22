<template>
  <div class="container">
    <div class="square"><div class="content"></div></div>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
* {
  display: inline-block;
}
.container {
  height: 100%;
}
.square {
  width: 50%;
  min-height: 1em;
  min-width: 1em;
}
.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.content {
  min-height: 1em;
  position: absolute;
  height: 100%;
  width: 613.0823865%;
  background-image: url(../assets/svg/logo-white.svg);
  background-repeat: no-repeat;
  background-position: center center;
}
</style>