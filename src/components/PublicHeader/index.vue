<template>
  <div class="public-header-container">
    <div class="now-time">
      {{ nowTime }}
    </div>
    <div class="user-info">
      <div class="user-image">
          <el-avatar size="medium" :src="imgUrl"></el-avatar>
      </div>
      <div class="user-name">admin</div>
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
