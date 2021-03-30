<template>
  <div class="container">
    <router-link :to="this.routerLink">
      {{ text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
    },
    routerLink: {
      type: Object,
      default: function () {
        return { path: "/", query: {} };
      },
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0.5em 0 0 0;
  font-size: 0.75em;
  color: var(--main-bg-color);
  opacity: 0.5;
}
.container:hover {
  opacity: 0.75;
}
.container:active {
  opacity: 1;
}
</style>