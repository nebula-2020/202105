<template>
  <div>
    <div class="form">
      <div class="line">
        <input type="text" placeholder="账号/手机号" />
      </div>
      <div class="line">
        <input type="password" placeholder="密码" />
      </div>

      <router-link :to="{ path: '/SignUp' }">
        <div class="to-sign-up">没有账号?</div>
      </router-link>
      <div class="line"><btn>登录</btn></div>
    </div>
  </div>
</template>

<script>
import Btn from "../components/Button.vue";
export default {
  name: "SignIn",
  components: {
    Btn,
  },
};
</script>

<style scoped>
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
.line {
  margin: 0.5em 0;
}
input {
  font-size: inherit;
  padding: 0.25em;
  border-radius: 0.25em;
  width: 100%;
  background-color: var(--light-input-bg-color);
  color: var(--light-fore-color);
}
.to-sign-up {
  padding: 0.5em 0 0 0;
  float: left;
  font-size: 0.75em;
  color: var(--main-bg-color);
  opacity: 0.5;
}
.to-sign-up:hover {
  opacity: 0.75;
}
.to-sign-up:active {
  opacity: 1;
}
</style>
