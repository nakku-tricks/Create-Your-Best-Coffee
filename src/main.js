import Vue from "vue";
import App from "./App.vue";
import store from "./storage/store";
import VueRouter from "vue-router";
import router from "./router/router";

Vue.use(VueRouter);

import "./assets/styles/index.scss";

Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App);
  },
  store,
  router,
}).$mount("#app");
