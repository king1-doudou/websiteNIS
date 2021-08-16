<template>
  <div class="login-dialog">
    <div class="exit pointer"></div>
    <div class="login-header">用户密码登录</div>
    <div class="login-input">
      <el-input
        prefix-icon="el-icon-user"
        placeholder="请输入手机号"
        v-model="username"
        clearable
      >
      </el-input>
      <el-input
        prefix-icon="el-icon-lock"
        placeholder="请输入密码"
        v-model="password"
        show-password
      ></el-input>
    </div>
    <div class="login-button">
      <el-button type="primary" @click="login">登录</el-button>
    </div>
    <div class="forget-password">
      <el-button type="text">忘记密码?</el-button>
    </div>
    <div class="login-bottom">
      <div class="login-letter pointer">扫码登录</div>
      <div class="shu">|</div>
      <div class="login-image">
        <div class="qq pointer"></div>
        <div class="weChat pointer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { matchUser } from "./mock/mock";
export default {
  data() {
    return {
      username: "",
      password: "",
      userInfo: {},
    };
  },
  mounted() {},

  methods: {
    login() {
      let data = {
        phoneNumber: this.username,
        password: this.password,
      };
      matchUser(data).then(
        (res) => {
          this.userInfo = res;
          this.$store.dispatch("loginAction", true);
          this.$store.dispatch("setUserNameAction", res.userName);
          localStorage.setItem("UserName", res.userName);
          this.$message({
            type: "success",
            message: "登陆成功!",
          });
        },
        (reason) => {
          this.$message({
            type: "warning",
            message: reason,
          });
        }
      );
    },
  },
};
</script>

<style lang="less">
.login-dialog {
  width: 514px;
  height: 600px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  .exit {
    width: 22px;
    height: 22px;
    background-image: url(../../../public/images/login/关闭.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 99% 99%;
    position: absolute;
    top: 24px;
    right: 38px;
  }
  .login-header {
    height: 24px;
    color: #333;
    font-size: 24px;
    font-weight: 500;
    position: absolute;
    top: 71px;
    left: 50%;
    transform: translateX(-50%);
  }
  .login-input {
    width: 437px;
    height: 159px;
    position: absolute;
    top: 141px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    .el-input__inner {
      height: 60px;
      font-size: 20px;
      padding-left: 30px;
    }
    .el-input__icon {
      font-size: 22px;
      line-height: 60px;
    }
  }
  .login-button {
    width: 437px;
    height: 62px;
    position: absolute;
    top: 352px;
    left: 50%;
    transform: translateX(-50%);
    .el-button {
      width: 100%;
      height: 100%;
      font-size: 21px;
      color: white;
      font-weight: 500px;
    }
  }
  .forget-password {
    height: 15px;
    line-height: 15px;
    font-size: 15px;
    position: absolute;
    top: 423px;
    left: 39px;
    .el-button {
      padding: 0;
    }
  }
  .login-bottom {
    width: 514px;
    height: 60px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgb(211, 237, 249);
    display: flex;
    justify-content: center;
    .login-letter {
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #24a5e0;
      font-size: 20px;
      width: 80px;
    }
    .shu {
      color: #24a5e0;
      font-size: 12px;
      height: 60px;
      line-height: 60px;
      margin: 0 15px;
    }
    .login-image {
      height: 60px;
      line-height: 60px;
      width: 66px;
      display: flex;
      justify-content: space-between;
      .qq {
        width: 25px;
        height: 25px;
        transform: translateY(17.5px);
        background-image: url(../../../public/images/login/QQ.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 99% 99%;
      }
      .weChat {
        width: 25px;
        height: 25px;
        transform: translateY(17.5px);
        background-image: url(../../../public/images/login/微信.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 99% 99%;
      }
    }
  }
}
</style>
