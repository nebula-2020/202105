<template>
  <div>
    <tab-box> </tab-box>
    <div>{{ text }}</div>
  </div>
</template>

<script>
import TabBox from "../components/TabBox.vue";
export default {
  name: "HomePage",
  components: {
    TabBox,
  },
  props: {
    text: {
      type: String,
    },
  },
  created() {},
};
</script>

<style scoped>
</style>