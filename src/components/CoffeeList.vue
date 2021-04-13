<template>
  <section class="coffee-list">
    <ul class="coffee-list__list">
      <coffee-list-item
        v-for="(coffee, idx) in coffeeList"
        :key="idx"
        :coffee="coffee"
        @addToCart="addToCart"
      ></coffee-list-item>
    </ul>
  </section>
</template>

<script>
import CoffeeListItem from "./CoffeeListItem";
export default {
  name: "CoffeeList",
  components: {
    CoffeeListItem,
  },
  props: {
    coffeeList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  methods: {
    addToCart(value) {
      this.$emit("addToCart", value);
    },
  },
};
</script>

<style lang="scss">
.coffee-list {
  &__list {
    display: flex;
    flex-wrap: wrap;

    padding: 0;
    margin: 0 -15px;
  }
}
</style>
