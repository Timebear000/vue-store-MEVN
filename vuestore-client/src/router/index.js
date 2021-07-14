import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/product/index.vue";
import ProductDetail from "../views/product/Detail.vue";
import Cart from "../views/cart/index.vue";
import NotFound from "../views/errors/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: Product,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
