<template>
  <div v-animate-css="'fadeIn'" class="news-infomation-container">
    <div class="new-item pointer" v-for="el in picUrls" :key="el.id">
      <div
        v-animate-css.hover="{ classes: 'bounceIn', delay: 100, duration: 900 }"
        class="center"
      >
        <a :href="el.webUrl">
          <el-image
            style="width: 88px; height: 88px"
            :src="el.path"
            fit="cover"
          ></el-image>
          <p class="item-name">{{ el.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getPicData } from "./mock/mock";
export default {
  data() {
    return {
      hovertada: {
        hovertada: {
          classes: "tada",
          duration: 1000,
        },
      },
      picUrls: [],
    };
  },
  mounted() {
    this.getPictures();
  },
  methods: {
    getPictures() {
      // 图片接口
      getPicData.then((res) => {
        this.picUrls = res;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.news-infomation-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .new-item {
    width: 188px;
    height: 188px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    border-radius: 10px;
    .item-name {
      font-size: 18px;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
