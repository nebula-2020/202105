<template>
  <div class="title-height">
    <div class="title-bar title-height auto-scroll-x">
      <div class="tool-bar title-height">
        <div class="left-box tool-box">
          <tool-bar-item :aniEnabled="false" :onClc="this.clc">
            <btn text="写文章"></btn>
          </tool-bar-item>
          <tool-bar-item :aniEnabled="false">
            <logo></logo>
          </tool-bar-item>
        </div>
        <div class="right-box tool-box">
          <tool-bar-item>登录/注册</tool-bar-item>
          <tool-bar-item>首页</tool-bar-item>
          <tool-bar-item>博客</tool-bar-item>
          <tool-bar-item>话题</tool-bar-item>
          <tool-bar-item>消息</tool-bar-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolBarItem from "./ToolBarItem.vue";
import Btn from "./Button.vue";
import Logo from "./Logo.vue";
export default {
  name: "ToolBar",
  components: {
    ToolBarItem,
    Btn,
    Logo,
  },
  methods: {
    clc() {
      console.log("debug");
    },
  },
};
</script>

<style scoped>
* {
  user-select: none;
  white-space: nowrap;
}
.title-height {
  height: 3em;
  max-height: 100px;
}
.title-bar {
  background: var(--dark-bg-color);
  color: var(--dark-highlight-color);
  position: fixed;
  top: 0;
  width: 100%;
}
.auto-scroll-x {
  overflow-y: hidden;
  overflow-x: auto;
}
.tool-bar {
  width: 100%;
  min-width: 450px;
  position: relative;
}
.tool-box {
  display: inline-block;
  text-align: center;
  max-width: 800px;
  position: absolute;
  bottom: 0;
  overflow-y: visible;
  height: 0;
}
.right-box > * {
  margin: 0 4% 0 0;
}
.left-box > * {
  margin: 0 0 0 4%;
}
.tool-box > * {
  transform: translateY(-100%);
}
.right-box {
  min-width: 300px;
  width: 61.8%;
  right: 0;
}
.left-box {
  min-width: 150px;
  width: 38.2%;
  left: 0;
}
</style>