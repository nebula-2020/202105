<template>
  <div class="container">
    <div class="square">
      <div class="content"></div>
    </div>
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
  overflow: visible;
}
.container {
  height: 100%;
}
.square {
  width: 100%;
  min-height: 1em;
  min-width: 1em;
}
.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.content {
  display: inline-block;
  min-height: 1em;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  height: 1em;
  width: 613.0823865%;
  background-image: url(../assets/svg/logo-white.svg);
  background-repeat: no-repeat;
  background-position: center center;
}
</style>