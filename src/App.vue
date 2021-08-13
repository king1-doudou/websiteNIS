<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
    }
  },
};
</script>
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  max-height: 100vh;
  background-color: #f5f5f5;
  padding: 0 0 20px 0;

}
</style>
