<template>
  <div class="title-height">
    <div class="title-bar title-height auto-scroll">
      <div class="tool-bar title-height">
        <div class="left-box tool-box">
          <tool-bar-item text="写文章"></tool-bar-item>
        </div>
        <div class="right-box tool-box">
          <tool-bar-item text="登录/注册"></tool-bar-item>
          <tool-bar-item text="首页"></tool-bar-item>
          <tool-bar-item text="博客"></tool-bar-item>
          <tool-bar-item text="话题"></tool-bar-item>
          <tool-bar-item text="消息"></tool-bar-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToolBarItem from "./ToolBarItem.vue";
export default {
  name: "ToolBar",
  components: {
    ToolBarItem,
  },
};
</script>

<style scoped>
* {
  white-space: nowrap;
  overflow-y: hidden;
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
.auto-scroll {
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
  overflow-x: hidden;
}
.tool-box > * {
  margin: 0 4% 0 0;
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