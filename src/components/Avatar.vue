<template>
  <div
    class="container"
    :style="{ minWidth: minWidth, width: minWidth, height: minHeight }"
  >
    <div
      class="content"
      v-bind:style="{
        backgroundImage: 'url(' + url + ')',
        backgroundColor: bgc,
        border: border,
        width: width,
        height: height,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    url: {
      type: String,
      default: require("../assets/images/default-avatar.png"),
    },
    width: {
      type: String,
      default: "2.5em",
    },
    height: {
      type: String,
      default: "2.5em",
    },
    minWidth: {
      type: String,
      default: "1em",
    },
    minHeight: {
      type: String,
      default: "1em",
    },
    border: {
      type: String,
      default: "none",
    },
    bgc: {
      type: String,
      default: "none",
    },
  },
};
</script>

<style scoped>
* {
  display: inline-block;
  overflow: visible;
}
.container {
  height: 100%;
  position: relative;
  overflow: visible !important;
}
.content {
  z-index: 2147483647;
  display: inline-block;
  min-height: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  transition: transform 0.1s linear;
  -o-transition: transform 0.1s linear;
  -ms-transition: transform 0.1s linear;
  -webkit-transition: transform 0.1s linear;
}
.content:hover {
  transform: translate(-50%, -50%) scale(1.1, 1.1);
  -ms-transform: translate(-50%, -50%) scale(1.1, 1.1); /* IE 9 */
  -moz-transform: translate(-50%, -50%) scale(1.1, 1.1); /* Firefox */
  -webkit-transform: translate(-50%, -50%) scale(1.1, 1.1); /* Safari 和 Chrome */
  -o-transform: translate(-50%, -50%) scale(1.1, 1.1);
}
</style>