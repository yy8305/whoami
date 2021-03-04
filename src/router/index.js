import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/router/home";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "pagenotfound" */ "@/views/PageNotFound.vue")
  }, // 없는 url 접속시 404
  Home,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
