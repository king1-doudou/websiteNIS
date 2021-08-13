<template>
  <div class="app-container">
    <div class="head-container">
      <public-header />
    </div>
    <div class="search-container">
      <search-box />
    </div>
    <div class="hover-container">
      <hover-tab />
    </div>
  </div>
</template>

<script>
import PublicHeader from "../../components/PublicHeader";
import SearchBox from "../../components/SearchBox";
import HoverTab from "./components/HoverTab";
export default {
  name: "Home",
  components: {
    PublicHeader,
    SearchBox,
    HoverTab,
  },
};
</script>

<style lang="less" scoped>
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
}
</style>
