<template>
  <div id="app">
    <div ref="title">
      <tool-bar />
    </div>
    <div class="body" :style="bodyStyle">
      <div :style="routerViewStyle">
        <router-view />
      </div>
      <div ref="foot">
        <footer-bar />
      </div>
    </div>
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
  data() {
    return {
      bodyStyle: "",
      routerViewStyle: "",
    };
  },
  mounted() {
    let titleHeight = this.$refs.title.offsetHeight;
    let footHeight = this.$refs.foot.offsetHeight;
    this.bodyStyle = "height:calc(100% - " + titleHeight + "px);";
    this.routerViewStyle = "height:calc(100% - " + footHeight + "px);";
  },
  modules: {},
};
</script>

<style>
@import "./assets/css/main-values.css";
@import "./assets/css/base-style.css";
@import "./assets/css/scrollbar-style.css";
@import "./assets/css/light-style.css";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--dark-bg-color);
  height: 100%;
  overflow: hidden;
}
.title {
  position: fixed;
}
.title-height {
  display: flex;
  flex: 1;
  height: var(--title-height);
  max-height: var(--title-max-height);
}
.body {
  overflow: hidden auto;
  background-color: var(--win-bg-color);
}
</style>
