import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import("../views/Search"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import("../views/Setting"),
    meta: {
      requireAuth: true
    }
  }

];

const router = new VueRouter({
  routes,
});

export default router;





