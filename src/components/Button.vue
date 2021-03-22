<template>
  <div>
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
  },
};
</script>

<style scoped>
* {
  background-color: var(--main-bg-color);
  color: var(--main-fore-color);
  border-radius: 0.25em;
  display: inline-block;
  padding: 0 1em;
}
</style>