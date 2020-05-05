import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/Add.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add",
    name: "add",
    component: Add
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart
  }
];

const router = new VueRouter({
  routes
});

export default router;
