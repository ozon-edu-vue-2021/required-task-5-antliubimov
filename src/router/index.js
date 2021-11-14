import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Cart from "@/views/Cart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/cart",
      component: Cart,
    },
  ],
});
