<template>
  <!-- @tab-click="handleClick" -->
  <el-tabs v-model="activeName">
    <el-tab-pane label="热点新闻" name="hotNews">
      <hot-news />
    </el-tab-pane>
    <el-tab-pane label="新闻资讯" name="NewsInformation">
      <news-information />
    </el-tab-pane>
    <el-tab-pane label="财经网站" name="financialWebsite">
      <financial-website />
    </el-tab-pane>
    <el-tab-pane label="我的收藏" name="myFavorites">
      <my-favorites />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import HotNews from "../Pages/HotNews";
import NewsInformation from "../Pages/NewsInformation";
import FinancialWebsite from "../Pages/FinancialWebsite";
import MyFavorites from "../Pages/MyFavorites";
export default {
  name: "hoverTab",
  data() {
    return {
      activeName: "hotNews",
      // activeName: "myFavorites",
    };
  },
  components: {
    HotNews,
    NewsInformation,
    FinancialWebsite,
    MyFavorites,
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
  },
};
</script>

<style lang="less">
.el-tabs__item {
  font-size: 22px !important;
  color: #666 !important;
}
.el-tabs__content {
  color: #333 !important;
}
</style>
