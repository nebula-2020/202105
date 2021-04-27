<template>
  <div class="container" :style="{ width: minWidth, height: minHeight }">
    <div
      class="content"
      v-bind:style="{
        backgroundColor: bgc,
        backgroundImage: 'url(' + url + ')',
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
      default: "#",
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
}
.content {
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
}
</style>