<template>
  <div class="container">
    <div class="text-box">{{ text }}</div>
    <div class="underline underline-hover"></div>
  </div>
</template>

<script>
export default {
  name: "ToolBarItem",
  props: {
    text: {
      type: String,
      default: "缺失值",
    },
  },
};
</script>

<style scoped>
div {
  font: inherit;
  color: inherit;
}

.container {
  padding: 0 1% 5px 1%;
  text-align: center;
  cursor: pointer;
  position: relative;
  display: inline-block;
}

.underline {
  content: "";
  position: absolute;
  bottom: 0;
  display: block;
  height: 0.2em;
  max-height: 15px;
  background-color: var(--main-fore-color);
}

.underline-hover {
  width: 0%;
  left: 50%;
  transition: width 1s ease-in, left 1s ease-in;
}

.container:hover .underline-hover {
  width: 100%;
  left: 0%;
  transition: width 0.25s ease-out, left 0.25s ease-out;
}
</style>