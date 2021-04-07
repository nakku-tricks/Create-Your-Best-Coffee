import { API_URL } from "@/constants";
export default {
  state: {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  },
  actions: {
    addCoffeeToCart({ commit }, cartItems) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
      commit("addCoffeeToCart", cartItems);
    },
    removeItem({ commit }, idx) {
      commit("removeItem", idx);
    },
    postProductsToApi({ commit }, products) {
      fetch(`${API_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(products),
      });
      commit("postProductsToApi");
    },
  },
  mutations: {
    addCoffeeToCart(state, cartItems) {
      state.cart = cartItems;
    },
    removeItem(state, idx) {
      state.cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    postProductsToApi(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
};
