<template>
  <div class="container">
    <div :class="`${this.isMobile ? 'mobile-form' : 'form'}`">
      <div class="line">
        <input type="text" placeholder="请输入 手机号" />
      </div>
      <div class="flex-line">
        <input class="code-input" type="text" placeholder="请输入 短信验证码" />
        <span>
          <btn :text="'获取验证码'" />
        </span>
      </div>
      <div class="line">
        <input type="password" placeholder="请输入 密码" />
      </div>
      <div class="line">
        <input type="password" placeholder="请再次输入 密码" />
      </div>
      <link-label
        class="float-left"
        :text="'已有账号?'"
        :routerLink="{ path: '/SignIn' }"
      />
      <div>
        <btn :text="'注册'" />
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "../components/Button.vue";
import LinkLabel from "../components/LinkLabel.vue";
import Common from "../js";
export default {
  name: "SignUp",
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
.line {
  margin: 0.5em 0;
}

input {
  display: inline-block;
  width: 100%;
  background-color: var(--light-input-bg-color);
  color: var(--light-fore-color);
}
.flex-line {
  display: -webkit-flex;
  display: -moz-flex;
  display: -o-flex;
  display: flex;
}
.code-input {
  display: inline-block;
  max-width: 100%;
  margin-right: 1em;
}
.container {
  height: 100%;
  overflow: hidden;
}
.form {
  padding: 2em;
  background-color: var(--light-bg-color);
  width: 61.8%;
  min-width: 450px;
  height: 100%;
  margin: auto;
  text-align: right;
}
.mobile-form {
  width: 100%;
  height: 100%;
  padding: 2em;
  background-color: var(--light-bg-color);
  height: 100%;
  text-align: right;
}
.to-sign-in {
  padding: 0.5em 0 0 0;
  float: left;
  font-size: 0.75em;
  color: var(--main-bg-color);
  opacity: 0.5;
}
.to-sign-in:hover {
  opacity: 0.75;
}
.to-sign-in:active {
  opacity: 1;
}
.float-left {
  float: left;
}
.btn-box {
  display: inline-block;
  width: 30%;
}
</style>
