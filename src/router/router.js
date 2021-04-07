import VueRouter from "vue-router";
import ViewCoffee from "../views/ViewCoffee";
import ViewCart from "../views/ViewCart";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/Coffee",
      name: "coffeeList",
      component: ViewCoffee,
    },
    {
      path: "/Cart",
      name: "cart",
      component: ViewCart,
    },
  ],
});

export default router;
