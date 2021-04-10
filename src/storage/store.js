import Vue from "vue";
import Vuex from "vuex";

import Coffees from "./modules/Coffees";
import Cart from "./modules/Cart";
import Ingredients from "./modules/Ingredients";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Coffees,
    Cart,
    Ingredients,
  },
});

export default store;
