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
  &__list {
  }

  &__item {
    font-size: 20px;
  }

  &__label {
    display: block;
  }

  &__checkbox {
  }
}
</style>
