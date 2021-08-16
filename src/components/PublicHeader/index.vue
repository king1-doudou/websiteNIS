<template>
  <div class="public-header-container">
    <div class="now-time">
      {{ nowTime }}
    </div>
    <div class="user-info">
      <div class="user-image">
        <el-avatar size="medium" :src="imgUrl"></el-avatar>
      </div>
      <el-dropdown :hide-timeout="250" @command="handleCommand">
        <span class="el-dropdown-link">
          <span class="user-name pointer">{{ $store.state.userName }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-s-tools" command="setting"
            >设置</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-s-tools" command="settingWord"
            >设置搜索词条</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-switch-button" command="exit"
            >退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "publicHeader",
  data() {
    return {
      nowTime: "",
      imgUrl: "../../../images/userImage.png",
    };
  },
  mounted() {
    this.getNowTime();
  },
  methods: {
    getNowTime() {
      let newTime = moment().format("YYYY-MM-DD HH:mm:ss");
      this.nowTime = newTime;
      setInterval(() => {
        newTime = moment().format("YYYY-MM-DD HH:mm:ss");
        this.nowTime = newTime;
      }, 1000);
    },
    handleCommand(command) {
      console.log(command);
      switch (command) {
        case "setting":
          // 设置页
          break;

        case "settingWord":
          // 设置搜索词条页
          break;

        case "exit":
          // 登出
          sessionStorage.removeItem("token");
          localStorage.removeItem("UserName");
          this.$store.dispatch("loginAction", false);
          this.$store.dispatch("setUserNameAction", "ADMIN");
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.public-header-container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  padding: 0 5px;
  .now-time {
    padding: 0 25px;
  }
  .user-info {
    display: flex;
    .user-image {
      padding-right: 10px;
    }
  }
}
</style>
