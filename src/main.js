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


router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem("token")) { // 判断本地是否存在token
    store.dispatch('loginAction', true)
    if (localStorage.getItem('UserName')) {
      store.dispatch("setUserNameAction", localStorage.getItem('UserName'));
    }
    next()
  } else {
    // 未登录,登陆组件
    store.dispatch('loginAction', false)
    next()
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


