<template>
  <div class="ingredient-list">
    <ul
      class="ingredient-list__list"
      v-for="(values, keys) in ingredientList"
      :key="values.id"
    >
      <h2 class="ingredient-list__title">{{ keys }}</h2>
      <ingredient-list-item
        :ingredient="values"
        :choseIngredients="choseIngredients"
        @setIngredients="setIngredients"
      ></ingredient-list-item>
    </ul>
  </div>
</template>

<script>
import IngredientListItem from "./IngredientListItem";
export default {
  props: {
    ingredientList: {
      type: Object,
      default: () => {
        return {};
      },
    },
    choseIngredients: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    IngredientListItem,
  },
  methods: {
    setIngredients(value) {
      return this.$emit("setIngredients", value);
    },
  },
};
</script>

<style lang="scss">
.ingredient-list {
  display: flex;
  flex-grow: 2;

  &__list {
    width: calc(25% - 25px);
    margin-right: 25px;
  }

  &__title {
    margin-bottom: 25px;
    text-transform: uppercase;
    font-size: 22px;
  }
}
</style>
