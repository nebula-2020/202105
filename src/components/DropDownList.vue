<template>
  <div ref="container" class="smooth-wh h100 bg">
    <div ref="width" class="hide"></div>
    <div ref="bodyBox" class="container bg widget-border-radius smooth-wh">
      <div @click="open()" class="text-align-center h100">
        <span class="input smooth-wh" ref="text">0086</span>
      </div>
      <div ref="listBlock" class="list-block mooth-wh">
        <ul ref="list" class="smooth-wh" :class="{ listOpen: opened }">
          <li :key="item.key" v-for="item in data" @click="clc(item.val)">
            <span class="key widget-border-radius">
              {{ item.key }}
            </span>
            <span class="val">
              {{ item.val }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const EMIT_NAME = "getVal";
import Common from "../js";
export default {
  name: "Button",
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      opened: false,
      listWidth: undefined,
    };
  },
  mounted() {
    let size = Common.eleSize(this.$refs.list);
    this.listWidth = size.width;
    size = Common.eleSize(this.$refs.text);
    this.$refs.bodyBox.style.width = size.width + "px";
    // this.$refs.bodyBox.style.height = this.$refs.bodyBox.offsetHeight + "px";
    this.$refs.container.style.width = this.$refs.bodyBox.offsetWidth + "px";
    this.$emit(EMIT_NAME, "0086");
  },
  methods: {
    listResize() {
      let w = undefined;
      if (this.opened) {
        w = this.listWidth + "px";
      } else {
        let size = Common.eleSize(this.$refs.text);
        w = size.width + "px";
      }
      this.$refs.bodyBox.style.width = w;
      this.$refs.width.style.width = w;
      this.$refs.container.style.width = this.$refs.width.offsetWidth + "px";
    },
    open() {
      this.opened = !this.opened;
      this.listResize();
    },
    clc(val) {
      this.opened = false;
      this.listResize();
      this.$refs.text.innerHTML = val;
      this.$emit(EMIT_NAME, val);
    },
  },
};
</script>

<style scoped>
* {
  vertical-align: baseline;
}
.bg {
  background-color: var(--light-input-bg-color);
  border-radius: var(--border-radius);
}
.container {
  position: absolute;
  z-index: 2147482647;
  text-align: left;
  /* border: 3px solid var(--border-color); */
  overflow: hidden;
}
.hide {
  position: absolute;
  height: 0;
  width: 100%;
}
.list-block {
  overflow-y: auto;
  overflow-x: hidden;
}
.listOpen {
  height: var(--dropdown-list-height);
  width: 100%;
}
.smooth-wh {
  transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
  -moz-transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
  -webkit-transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
  -o-transition: width 0.25s ease-in-out, height 0.25s ease-in-out;
}
ul {
  background-color: var(--light-input-bg-color);
  overflow-y: visible;
  height: 0;
  width: 100%;
}
.input {
  position: relative;
  width: 100%;
  min-height: 1em;
  line-height: 1em;
  padding: 0.25em;
  color: var(--light-color);
  font-weight: bolder;
}
.input:hover {
  color: var(--light-highlight-color);
  font-weight: bolder;
}
.text-align-center {
  text-align: center;
}
.h100 {
  height: 100%;
}
li {
  border-top: 0.5px solid var(--border-color);
  border-bottom: 0.5px solid var(--border-color);
  padding: 0.05em 0.1em;
  white-space: nowrap;
}
.key {
  color: var(--light-highlight-color);
  background-color: var(--light-bg-color);
  margin: 0 0.25em 0 0;
}
.val {
  color: var(--light-fore-color);
  padding-right: 1em;
}
</style>