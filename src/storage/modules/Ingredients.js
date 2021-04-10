import { API_URL } from "@/constants";
export default {
  state: {
    ingredients: {},
  },
  actions: {
    async getIngredientList({ commit }) {
      fetch(`${API_URL}/ingredients`)
        .then((res) => res.json())
        .then((ingredients) => commit("setIngredientsToState", ingredients))
        .catch((error) => console.log(error));
    },
  },
  mutations: {
    setIngredientsToState(state, ingredients) {
      state.ingredients = ingredients;
    },
  },
  getters: {},
};
