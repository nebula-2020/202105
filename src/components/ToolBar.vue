<template>
  <div class="title-height">
    <div class="title-bar title-height">
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
          <tool-bar-item
            :aniEnabled="!userStat"
            :routerLink="{ path: userStat ? '/me' : '/signIn' }"
          >
            <Avatar
              v-show="userStat"
              minWidth="3em"
              width="3em"
              height="3em"
              border="5px solid var(--dark-bg-color)"
              bgc="var(--dark-bg-color)"
            ></Avatar>
            <span v-show="!userStat">登录/注册</span>
          </tool-bar-item>
          <tool-bar-item :routerLink="{ path: '/index' }">首页</tool-bar-item>
          <tool-bar-item :routerLink="{ path: '/test' }">博客</tool-bar-item>
          <tool-bar-item>话题</tool-bar-item>
          <tool-bar-item>消息</tool-bar-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const COOKEY = "index";
import ToolBarItem from "./ToolBarItem.vue";
import Btn from "./Button.vue";
import Logo from "./Logo.vue";
import Avatar from "./Avatar.vue";
import Common from "../js";
export default {
  name: "ToolBar",
  data() {
    return {
      isMobile: false,
      id: 0,
      userStat: false,
    };
  },
  components: {
    ToolBarItem,
    Btn,
    Logo,
    Avatar,
  },
  created() {
    this.isMobile = Common.isMobileScreen();
  },
  mounted() {
    this.refreshUserStatus();
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
    refreshUserStatus() {
      this.id = this.getCookie(COOKEY);
      this.userStat = this.id > 0;
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
  height: var(--title-height);
  max-height: var(--title-max-height);
}
.title-bar {
  background: var(--dark-bg-color);
  color: var(--dark-highlight-color);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2147483647;
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
  -o-transition: margin 0.25s ease-in-out;
  -ms-transition: margin 0.25s ease-in-out;
  -webkit-transition: margin 0.25s ease-in-out;
}
.right-box > * {
  margin: 0 2% 0 2%;
  transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-in-out;
  -ms-transition: margin 0.25s ease-in-out;
  -webkit-transition: margin 0.25s ease-in-out;
}

@media only screen and (max-width: 800px) {
  .left-box > * {
    margin: 0 !important;
    transition: margin 0.25s ease-out;
    -o-transition: margin 0.25s ease-in-out;
    -ms-transition: margin 0.25s ease-in-out;
    -webkit-transition: margin 0.25s ease-in-out;
  }
  .right-box > * {
    margin: 0 !important;
    transition: margin 0.25s ease-out;
    -o-transition: margin 0.25s ease-in-out;
    -ms-transition: margin 0.25s ease-in-out;
    -webkit-transition: margin 0.25s ease-in-out;
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
