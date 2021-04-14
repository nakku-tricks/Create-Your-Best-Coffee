<template>
  <li class="ingredient-list-item">
    <ul class="ingredient-list-item__list">
      <li
        class="ingredient-list-item__item"
        v-for="item in ingredient"
        :key="item.id"
      >
        <label class="ingredient-list-item__label">
          <input
            class="ingredient-list-item__checkbox"
            type="checkbox"
            v-model="ingredients"
            :value="item.title"
          />
          {{ item.title }}
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "IngredientListItem",
  props: {
    ingredient: {
      type: Array,
      default: () => {
        return [];
      },
    },
    choseIngredients: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    ingredients: {
      get() {
        return this.choseIngredients;
      },
      set(value) {
        this.$emit("setIngredients", value);
      },
    },
  },
};
</script>

<style lang="scss">
.ingredient-list-item {
  &__item {
    font-size: 19px;
    border: 1px solid $color-border;
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 10px;

    transition: transform 300ms ease;
    &:active {
      transform: scale(0.9);
    }
  }

  &__label {
    display: block;
    padding: 5px 10px;
  }
}
</style>
