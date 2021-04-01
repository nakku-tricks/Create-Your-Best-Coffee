import Vue from "vue";
import Vuex from "vuex";

import Coffees from "./modules/Coffees";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Coffees,
  },
});

export default store;
