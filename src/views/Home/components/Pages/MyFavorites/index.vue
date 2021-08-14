<template>
  <div v-animate-css="'fadeIn'" class="outside-container">
    <div class="button">
      <el-button type="text" @click="handleClickChangeStatus">{{
        status ? "完 成" : "编 辑"
      }}</el-button>
    </div>
    <div class="favorites-container">
      <div class="new-item pointer" v-for="el in favoritesData" :key="el.id">
        <div class="center" :class="status ? 'active' : ''">
          <el-popconfirm
            title="确定删除吗？"
            confirm-button-text="是"
            cancel-button-text="否"
            confirm-button-type="text"
            cancel-button-type="text"
            icon="el-icon-delete"
            icon-color="rgb(218,8,11)"
            @confirm="handleConfirm"
            @cancel="handleCancel"
          >
            <div
              slot="reference"
              v-show="status"
              v-animate-css="'tada'"
              class="delete"
            ></div>
          </el-popconfirm>
          <el-image
            style="width: 48px; height: 48px"
            :src="el.path"
            fit="cover"
          ></el-image>
          <p class="item-name">{{ el.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFavoriteData } from "./mock/mock";
export default {
  data() {
    return {
      favoritesData: [],
      status: false,
    };
  },
  mounted() {
    this.getFavorites();
  },
  methods: {
    getFavorites() {
      getFavoriteData.then((res) => {
        this.favoritesData = res;
      });
    },
    handleClickChangeStatus() {
      this.status = !this.status;
    },
    handleConfirm() {
      console.log("确认删除的回调！");
    },
    handleCancel() {
      console.log("取消删除的回调！");
      return;
    },
  },
};
</script>

<style lang="less">
.outside-container {
  width: 100%;
  padding: 12px;
  position: relative;
  .button {
    position: absolute;
    right: 35px;
    top: 20px;
  }
}
.favorites-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding-top: 30px;
  padding-bottom: 30px;
  .new-item {
    width: 180px;
    height: 80px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    margin: 0 40px;
    .center {
      width: 180px;
      display: flex;
      border-radius: 5px;
      position: relative;

      .delete {
        position: absolute;
        right: -10px;
        top: -10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-image: url(./imgs/close.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .item-name {
        font-size: 20px;
        height: 48px;
        width: 132px;
        line-height: 48px;
        text-align: center;
      }
    }
    .active {
      background-color: #f5f5f5;
    }
  }
}

</style>
