<template>
  <div id="app">
    <tool-bar />
    <div class="frame">
        <router-view/>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import FooterBar from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    ToolBar,
    FooterBar,
  },
};
</script>

<style>
@import "./assets/css/main-values.css";
@import "./assets/css/base-style.css";
@import "./assets/css/scrollbar-style.css";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.frame{
    min-height: 50vh;
}
</style>
