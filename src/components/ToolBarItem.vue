<template>
  <div class="container">
    <router-link @click="clc" :to="this.routerLink">
      <slot></slot>
    </router-link>
    <div
      class="underline"
      :class="{ 'underline-hover': this.aniEnabled }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ToolBarItem",
  props: {
    aniEnabled: {
      type: Boolean,
      default: true,
    },
    routerLink: {
      type: Object,
      default: function () {
        return { path: "/", query: {} };
      },
    },
    onClc: {
      type: Function,
      default: function () {},
    },
  },
  methods: {
    clc(e) {
      this.onClc(e);
    },
  },
};
</script>

<style scoped>
* {
  overflow: visible;
}
div {
  font: inherit;
  color: inherit;
}
.container {
  padding: 0 1% 5px 1%;
  text-align: center;
  cursor: pointer;
  position: relative;
  display: inline-block;
}
.underline {
  content: "";
  position: absolute;
  bottom: 0;
  display: block;
  height: 0.2em;
  max-height: 15px;
  background-color: var(--main-bg-color);
}

.underline-hover {
  width: 0%;
  left: 50%;
  transition: width 1s ease-in, left 1s ease-in;
  -o-transition: width 1s ease-in, left 1s ease-in;
  -ms-transition: width 1s ease-in, left 1s ease-in;
  -webkit-transition: width 1s ease-in, left 1s ease-in;
}

.container:hover .underline-hover {
  width: 100%;
  left: 0%;
  transition: width 0.25s ease-out, left 0.25s ease-out;
  -o-transition: width 0.25s ease-out, left 0.25s ease-out;
  -ms-transition: width 0.25s ease-out, left 0.25s ease-out;
  -webkit-transition: width 0.25s ease-out, left 0.25s ease-out;
}
a {
  height: 100%;
  color: inherit;
}
a:link {
  color: inherit;
}
a:visited {
  color: inherit;
}
a:hover {
  color: inherit;
}
a:active {
  color: inherit;
  text-shadow: 0 0 0.25em var(--main-bg-color);
}
</style>