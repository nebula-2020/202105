<template>
  <div class="container">
    <div :class="`${this.isMobile ? 'mobile-form' : 'form'}`">
      <div class="line">
        <input type="text" placeholder="请输入 账号/手机号" />
      </div>
      <div class="line">
        <input type="password" placeholder="请输入 密码" />
      </div>
      <link-label
        class="float-left"
        :text="'没有账号?'"
        :routerLink="{ path: '/SignUp' }"
      />
      <div class="line"><btn :text="'登录'" /></div>
    </div>
  </div>
</template>

<script>
import Btn from "../components/Button.vue";
import LinkLabel from "../components/LinkLabel.vue";
import Common from "../js";
export default {
  name: "SignIn",
  components: {
    Btn,
    LinkLabel,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  created() {
    this.isMobile = Common.isMobileScreen();
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.isMobile = Common.isMobileScreen();
      })();
    };
  },
};
</script>

<style scoped>
.container {
  overflow: hidden;
}
.form {
  width: 50vmin;
  height: 50vmin;
  min-width: 300px;
  min-height: 300px;
  max-width: 50%;
  max-height: 38.1966011%;
  position: absolute;
  left: 50%;
  top: 38.1966011%;
  transform: translate(-50%, -50%);
  background-color: var(--light-bg-color);
  padding: 2em;
  text-align: right;
}
.mobile-form {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: var(--light-bg-color);
  padding: 2em;
  text-align: right;
}
.line {
  margin: 0.5em 0;
}
input {
  width: 100%;
  background-color: var(--light-input-bg-color);
  color: var(--light-fore-color);
}
.float-left {
  float: left;
}
</style>
