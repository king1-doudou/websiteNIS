import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import("../views/Search")
  }

];

const router = new VueRouter({
  routes,
});

export default router;
