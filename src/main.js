import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(Element, {
  size: 'medium', // set element-ui default size
})



// 引入全局样式
import "./styles/index.less"
import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
