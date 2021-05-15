<template>
  <div class="container">
    <main :data-m="this.isMobile">
      <div class="form">
        <flex-row>
          <icon
            :url="`${require('../assets/svg/id.svg')}`"
            minWidth="var(--icon-scale)"
            width="var(--icon-scale)"
            height="var(--icon-scale)"
            minHeight="100%"
          />
          <span class="white-place"></span>
          <input
            v-model="id"
            type="text"
            disabled="disabled"
            readonly
            unselectable="on"
            placeholder="请输入 账号"
          />
        </flex-row>
        <flex-row>
          <icon
            :url="`${require('../assets/svg/name.svg')}`"
            minWidth="var(--icon-scale)"
            width="var(--icon-scale)"
            height="var(--icon-scale)"
            minHeight="100%"
          />
          <span class="white-place"></span>
          <input v-model="name" type="text" placeholder="请输入 昵称" />
        </flex-row>
        <flex-row>
          <icon
            :url="`${require('../assets/svg/signature.svg')}`"
            minWidth="var(--icon-scale)"
            width="var(--icon-scale)"
            height="var(--icon-scale)"
            minHeight="100%"
          />
          <span class="white-place"></span>
          <input
            v-model="signature"
            type="text"
            placeholder="请输入 个性签名"
          />
        </flex-row>
        <flex-row>
          <icon
            :url="`${require('../assets/svg/phone.svg')}`"
            minWidth="var(--icon-scale)"
            width="var(--icon-scale)"
            height="var(--icon-scale)"
            minHeight="100%"
          />
          <span class="white-place"></span>
          <drop-down-list :data="PP" @getVal="changePrefix" :selected="area" />
          <span class="white-place"></span>
          <input v-model="phone" type="text" placeholder="请输入 手机号" />
        </flex-row>
        <flex-row>
          <icon
            :url="`${require('../assets/svg/password.svg')}`"
            minWidth="var(--icon-scale)"
            width="var(--icon-scale)"
            height="var(--icon-scale)"
            minHeight="100%"
          />
          <span class="white-place"></span>
          <input
            v-model="pwd"
            type="password"
            placeholder="请输入 8~20位密码 必须包含数字、字母和符号"
          />
        </flex-row>
        <div class="float-right">
          <btn ref="btn" :text="btnText" @click.native="submit()" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PP from "../assets/json/phone-prefix.json";
import Btn from "../components/Button.vue";
import FlexRow from "../components/FlexRow.vue";
import DropDownList from "../components/DropDownList.vue";
import Icon from "../components/Avatar.vue";
import Common from "../js";
var defBtnText = "保存";
export default {
  name: "UserCenter",
  components: {
    Btn,
    DropDownList,
    Icon,
    FlexRow,
  },
  data() {
    return {
      isMobile: false,
      btnText: defBtnText,
      phonePrefix: "",
      phone: "",
      id: "",
      pwd: "12345678",
      name: "",
      signature: "",
      PP,
      area: "0086",
    };
  },
  created() {
    this.isMobile = Common.isMobileScreen();
    Common.post(
      "me",
      {},
      (data, status) => {
        if (status == 200 && data.id > 0) {
          this.id = data.id;
          let p = data.phone;
          this.area = p.substr(0, 4);
          this.phone = p.substr(4);
          this.name = data.name;
          this.signature = data.signature;
        } else {
          this.$router.push("/SignIn");
        }
      },
      () => {
        this.$router.push("/SignIn");
      }
    );
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.isMobile = Common.isMobileScreen();
      })();
    };
  },
  methods: {
    changePrefix(v) {
      this.phonePrefix = v;
    },
    submit() {
      let phone, code, password, password1;
      phone = this.phone;
      password = this.pwd;
      password1 = this.pwd1;
      code = this.code;
      if (!phone) {
        this.btnText = "手机号为空";
      } else if (!/^[0-9]{4,11}$/.test(phone)) {
        this.btnText = "手机号有误";
      } else if (!password || !password1) {
        this.btnText = "密码为空";
      } else if (
        !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{7,19}$/.test(
          password
        )
      ) {
        this.btnText = "密码无效";
      } else if (!code) {
        this.btnText = "验证码为空";
      } else if (password !== password1) {
        this.btnText = "密码不一致";
      } else {
        let data = {
          phone: String(this.phonePrefix) + phone,
          name: phone,
          password: password,
          code: code,
        };
        Common.get(
          "signUp",
          data,
          (data) => {
            if (data.succeed) {
              this.$router.push("/HomePage");
            } else {
              this.btnText = "注册失败";
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
.white-place {
  width: 0.5em;
}
input {
  display: inline-block;
  width: 100%;
  background-color: var(--light-input-bg-color);
  color: var(--light-fore-color);
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
  margin-left: 50%;
  transform: translate(-50%, 0);
  max-width: 600px;
  width: 100%;
  text-align: inherit;
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
.float-right {
  float: right;
  display: inline;
  height: auto;
}
</style>
