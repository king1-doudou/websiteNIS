<template>
  <div class="search-box-container">
    <el-input placeholder="请输入内容" v-model="searchText"> </el-input>
    <el-button type="primary">查 询</el-button>
  </div>
</template>

<script>
export default {
  name: "searchBox",
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<style lang="less" scoped>
.search-box-container{
  display: flex;
  flex-wrap: nowrap;
}
</style>
