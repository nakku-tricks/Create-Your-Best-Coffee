import { API_URL } from "@/constants";
export default {
  state: {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  },
  actions: {
    addCoffeeToCart({ commit }, cartItem) {
      commit("addCoffeeToCart", cartItem);
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
    addCoffeeToCart(state, cartItem) {
      const cart = state.cart;
      if (cart.length) {
        let isItemExist = false;
        cart.map((elem) => {
          if (elem.id === cartItem.id) {
            isItemExist = true;
          }
        });
        if (!isItemExist) {
          cart.push(cartItem);
        }
      } else {
        cart.push(cartItem);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
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
