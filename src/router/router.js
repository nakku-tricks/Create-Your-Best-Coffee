import VueRouter from "vue-router";
import ViewCoffee from "../views/ViewCoffee";
import ViewCart from "../views/ViewCart";
import ViewCreateCoffee from "../views/ViewCreateCoffee";

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
    {
      path: "/Create-Coffee",
      name: "createCoffee",
      component: ViewCreateCoffee,
    },
  ],
});

export default router;
