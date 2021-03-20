<template>
  <div id="app">
    <tool-bar />
    <div>?????</div>
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  name: "App",
  components: {
    ToolBar,
  },
};
</script>

<style>
@import "./assets/css/main-colors.css";
@import "./assets/css/base-style.css";
@import "./assets/css/scrollbar-style.css";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
