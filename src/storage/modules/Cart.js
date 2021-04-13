import { API_URL } from "@/constants";
export default {
  state: {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    amount: JSON.parse(localStorage.getItem("amount") || "0"),
  },
  actions: {
    addCoffeeToCart({ commit }, cartItem) {
      commit("addCoffeeToCart", cartItem);
    },
    removeItem({ commit }, idx) {
      commit("removeItem", idx);
      commit("removeAmount");
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
            elem.amount++;
            isItemExist = true;
          }
        });
        if (!isItemExist) {
          cartItem.amount = 1;
          cart.push(cartItem);
        }
      } else {
        cartItem.amount = 1;
        cart.push(cartItem);
      }
      state.amount++;
      localStorage.setItem("amount", JSON.stringify(state.amount));
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem(state, idx) {
      state.cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeAmount(state) {
      let amount = state.cart.reduce((sum, elem) => {
        return sum + elem.amount;
      }, 0);
      state.amount = amount;
      localStorage.setItem("amount", JSON.stringify(state.amount));
    },
    postProductsToApi(state) {
      state.cart = [];
      state.amount = 0;
      localStorage.removeItem("cart");
      localStorage.removeItem("amount");
    },
  },
  getters: {
    amountItemCart(state) {
      return state.amount;
    },
  },
};
