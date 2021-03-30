<template>
  <div class="title-height">
    <div class="title-bar title-height auto-scroll-x">
      <div ref="toolBar" class="tool-bar title-height">
        <div class="left-box tool-box">
          <tool-bar-item :aniEnabled="false" :onClc="this.clc">
            <btn text="写文章"></btn>
          </tool-bar-item>
          <tool-bar-item :aniEnabled="false" :routerLink="{ path: '/index' }">
            <logo></logo>
          </tool-bar-item>
        </div>
        <div
          class="right-box tool-box"
          :style="`display:${this.isMobile ? 'none' : 'inline-block'};`"
        >
          <tool-bar-item :routerLink="{ path: '/signIn' }">
            登录/注册
          </tool-bar-item>
          <tool-bar-item :routerLink="{ path: '/index' }">首页</tool-bar-item>
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
import Common from "../js";
export default {
  name: "ToolBar",
  data() {
    return {
      isMobile: false,
    };
  },
  components: {
    ToolBarItem,
    Btn,
    Logo,
  },
  created() {},
  mounted() {
    window.onresize = () => {
      return (() => {
        this.isMobile = Common.isMobileScreen();
      })();
    };
  }, //渲染完成
  methods: {
    clc() {
      console.log("debug");
    },
    signIn() {},
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
.left-box {
  min-width: 200px;
  width: 38.2%;
  right: 61.8;
}
.right-box {
  min-width: 300px;
  width: 50%;
  left: 50%;
}
.tool-box > * {
  transform: translateY(-100%);
}
.left-box > * {
  margin: 0 2% 0 2%;
  transition: margin 0.25s ease-out;
}
.right-box > * {
  margin: 0 2% 0 2%;
  transition: margin 0.25s ease-out;
}

@media only screen and (max-width: 800px) {
  .left-box > * {
    margin: 0 !important;
    transition: margin 0.25s ease-out;
  }
  .right-box > * {
    margin: 0 !important;
    transition: margin 0.25s ease-out;
  }
}

a:link {
  color: var(--dark-highlight-color);
}
a:visited {
  color: var(--dark-highlight-color);
}
a:hover {
  color: var(--dark-highlight-color);
}
a:active {
  color: var(--dark-highlight-color);
  text-shadow: 0 0 0.1em var(--dark-highlight-color);
}
</style>
