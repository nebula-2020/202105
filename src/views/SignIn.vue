<template>
  <div class="container">
    <div :class="`${this.isMobile ? 'mobile-form' : 'form'}`">
      <flex-row>
        <input v-model="id" type="text" placeholder="请输入 账号" />
      </flex-row>
      <flex-row>
        <input v-model="pwd" type="password" placeholder="请输入 密码" />
      </flex-row>

      <link-label
        class="float-left"
        :text="'没有账号?'"
        :routerLink="{ path: '/SignUp' }"
      />
      <btn :text="btnText" @click.native="submit()" />
    </div>
  </div>
</template>

<script>
import PP from "../assets/json/phone-prefix.json";
import Btn from "../components/Button.vue";
import LinkLabel from "../components/LinkLabel.vue";
import FlexRow from "../components/FlexRow.vue";
import Common from "../js";
var defBtnText = "登录";
export default {
  name: "SignIn",
  components: {
    Btn,
    LinkLabel,
    FlexRow,
  },
  data() {
    return {
      isMobile: false,
      btnText: defBtnText,
      id: "",
      pwd: "",
      PP,
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
  methods: {
    submit() {
      let id, password;
      id = this.id;
      password = this.pwd;
      if (!id) {
        this.btnText = "账号为空";
      } else if (!password) {
        this.btnText = "密码为空";
      } else if (
        !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{7,19}$/.test(
          password
        )
      ) {
        this.btnText = "用户名或密码错误";
      } else {
        let data = {
          id: id,
          phone: "",
          password: password,
        };
        Common.request(
          "signIn",
          data,
          (data, status) => {
            if (status == 200 && data == id) {
              this.$router.push("/HomePage");
            } else {
              this.btnText = "用户名或密码错误";
            }
          },
          () => {
            this.btnText = "服务器异常";
          }
        );
      }
      setTimeout(() => {
        this.btnText = defBtnText;
        // this.$forceUpdate();
      }, 1000);
    },
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
input {
  width: 100%;
  background-color: var(--light-input-bg-color);
  color: var(--light-fore-color);
}
.float-left {
  float: left;
}
</style>
