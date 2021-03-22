<template>
  <div class="container">
    <div @click="clc"><slot></slot></div>
    <div
      class="underline"
      :class="{ 'underline-hover': this.aniEnabled }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ToolBarItem",
  props: {
    aniEnabled: {
      type: Boolean,
      default: true,
    },
    onClc: {
      type: Function,
      default: function () {},
    },
  },
  methods: {
    clc(e) {
      this.onClc(e);
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
  background-color: var(--main-bg-color);
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