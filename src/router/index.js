import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
