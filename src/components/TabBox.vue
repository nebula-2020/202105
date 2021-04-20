<template>
  <div class="container">
    <ul class="tab"></ul>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "TabBox",
  props: {
    aniEnabled: {
      type: Boolean,
      default: true,
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
.tab {
  display: inline-block;
}
.box {
  display: inline-block;
}
</style>