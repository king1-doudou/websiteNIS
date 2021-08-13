<template>
  <div v-animate-css="'fadeIn'" class="hot-news-container">
    <div class="pic-new-item" v-for="news in newsList.picNews" :key="news.id">
      <div class="new-title">{{ news.title }}</div>
      <div class="new-image">
        <el-image
          v-for="(pics, index) in news.picList"
          :key="index"
          style="width: 266px; height: 176px"
          :src="pics"
          fit="cover"
        ></el-image>
      </div>
      <div class="new-time">{{ news.from }} 发布时间 : {{ news.time }}</div>
    </div>

    <div
      class="video-new-item"
      v-for="news in newsList.videoNews"
      :key="news.id"
    >
      <div class="new-video">
        <el-image
          style="width: 266px; height: 176px"
          :src="news.picUrl"
          fit="cover"
        ></el-image>
      </div>
      <div class="new-info">
        <div class="new-title">{{ news.title }}</div>
        <div class="new-time">{{ news.from }} 发布时间 : {{ news.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewsList } from "./mock/mock";
export default {
  data() {
    return {
      newsList: [],
    };
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      getNewsList.then((res) => {
        console.log(res);
        this.newsList = res;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.hot-news-container {
  .pic-new-item {
    width: 100%;
    padding: 10px;
    .new-title {
      color: #333;
      font-size: 22px;
      margin-bottom: 20px;
    }
    .new-image {
      margin-bottom: 20px;
      .el-image {
        border-radius: 10px;
        margin-right: 30px;
      }
    }
    .new-time {
      color: #999999;
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  .video-new-item {
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    .new-video {
      margin-bottom: 20px;
      .el-image {
        border-radius: 10px;
        margin-right: 30px;
      }
    }
    .new-info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .new-title {
        color: #333;
        font-size: 22px;
      }
      .new-time {
        color: #999999;
        font-size: 16px;
      }
    }
  }
}
</style>
