import Vue from "vue";
import Vuex from "vuex";

import Coffees from "./modules/Coffees";
import Cart from "./modules/Cart";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Coffees,
    Cart,
  },
});

export default store;
