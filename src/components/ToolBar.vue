<template>
  <div class="title-height">
    <div class="title-bar title-height auto-scroll-x">
      <div ref="toolBar" class="tool-bar title-height">
        <div ref="leftTool" class="left-box tool-box">
          <tool-bar-item :aniEnabled="false" :onClc="this.clc">
            <btn text="写文章"></btn>
          </tool-bar-item>
          <tool-bar-item :aniEnabled="false">
            <logo></logo>
          </tool-bar-item>
          <div class="empty"></div>
        </div>
        <div ref="rightTool" class="right-box tool-box" 
        :class="`${this.narrow?'child-margin-0':''}`"
        :style="`display:${this.isMobile?'none':'inline-block'};`">
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
import Common from "../js"
export default {
  name: "ToolBar",
  data() {
    return {
      isMobile: false,
      narrow:false
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
        this.isMobile=Common.isMobileScreen();
        this.narrow=this.isNarrow();
      })()
    }
  }, //渲染完成
  methods: {
    clc() {
      console.log("debug");
    },
    isNarrow(){
       return this.$refs.rightTool.clientWidth>this.$refs.toolBar.clientWidth*.6;
    }
  },
};
</script>

<style scoped>
* {
  user-select: none;
  white-space: nowrap;
}
.child-margin-0>*{
    margin: 0 !important;
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
  max-width: 600px;
  position: absolute;
  bottom: 0;
  overflow-y: visible;
  height: 0;
}
.right-box > * {
  margin: 0 2% 0 2%;
  transition: margin 0.25s ease-out;
}
.left-box > * {
  margin: 0 2% 0 2%;
  transition: margin 0.25s ease-out;
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
  min-width: 200px;
  width: 38.2%;
  left: 0;
}

</style>