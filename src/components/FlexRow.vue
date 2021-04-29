<template>
  <div class="o0">
    <div class="line flex">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.o0 {
  overflow: visible;
  margin: 0.5em 0;
  transition: height 0.25s ease-in-out;
  -o-transition: height 0.25s ease-in-out;
  -ms-transition: height 0.25s ease-in-out;
  -webkit-transition: height 0.25s ease-in-out;
}
.flex {
  display: -webkit-flex; /* 新版本语法 Chrome 21+ */
  display: flex; /* 新版本语法 Opear 12.1 Firefox 22+ */
  display: -webkit-box; /* 新版本语法 Safari， ios， Android browser, older Webkit browsers. */
  display: -moz-box; /* 新版本语法 Firefox(buggy) */
  display: -ms-flexbox;
  align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  flex-wrap: nowrap;
  -o-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  -moz-flex-wrap: nowrap;
  -webkit-flex-wrap: nowrap;
}
.line {
  min-height: 1em;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: visible;
}
</style>