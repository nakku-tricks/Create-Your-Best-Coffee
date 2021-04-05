import { API_URL } from "@/constants";
export default {
  state: {
    coffee: [],
  },
  actions: {
    async getCoffeeList({ commit }) {
      fetch(`${API_URL}/coffee`)
        .then((value) => value.json())
        .then((value) => commit("setCoffeeToState", value))
        .catch((error) => console.log(error));
    },
  },
  mutations: {
    setCoffeeToState(state, value) {
      state.coffee = value;
    },
  },
  getters: {},
};
