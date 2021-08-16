<template>
  <div class="app-container">
    <div v-if="!$store.state.isLogin" class="mask">
      <login />
    </div>

    <div class="head-container">
      <public-header />
    </div>
    <div class="search-container">
      <search-box />
    </div>
    <div class="hover-container">
      <hover-tab />
    </div>
    <el-backtop target=".app-container" :bottom="100" :visibility-height="5">
      <div class="toTop pointer">
        <div class="back-to-top-image"></div>
        <p>返回顶部</p>
      </div>
    </el-backtop>
  </div>
</template>

<script>
import Login from "../Login";
export default {
  name: "Home",
  data() {
    return {
      isLogin: true,
    };
  },
  components: {
    PublicHeader: () => import("../../components/PublicHeader"),
    SearchBox: () => import("../../components/SearchBox"),
    HoverTab: () => import("./components/HoverTab"),
    Login,
  },
};
</script>

<style lang="less">
.app-container {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  .head-container {
    align-self: flex-end;
  }
  .search-container {
    width: 71%;
  }
  .hover-container {
    width: 90%;
    max-height: 70%;
    min-height: 70%;
  }
  .el-backtop {
    border-radius: 0;
    width: 80px;
    box-shadow: none;
    background-color: transparent;
  }
  .toTop {
    position: relative;
    width: 80px;
    text-align: center;
    color: #333;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    .back-to-top-image {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -45px;
      width: 28px;
      height: 30px;
      background-image: url(../../../public/images/goToTop.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
}

.mask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1000 !important;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
