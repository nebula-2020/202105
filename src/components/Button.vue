<template>
  <div class="container" :style="{ minWidth: minWidth + ' !important' }">
    <div class="btn"></div>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "确定",
    },
    minWidth: {
      type: String,
      default: "3em",
    },
  },
};
</script>

<style scoped>
* {
  position: relative;
  background-color: var(--main-bg-color);
  color: var(--main-fore-color);
  border-radius: 0.25em;
  display: inline-block;
  padding: 0 1em;
}
.container {
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.btn {
  padding: 0;
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--main-fore-color);
  opacity: 0;
}
.btn:hover {
  opacity: 0.1;
}
.btn:active {
  opacity: 0.25;
}
</style>