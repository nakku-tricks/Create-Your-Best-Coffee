<template>
  <section class="coffee-list">
    <ul class="coffee-list__list">
      <coffee-list-item
        v-for="(coffee, idx) in coffeeList"
        :key="idx"
        :coffee="coffee"
      ></coffee-list-item>
    </ul>
  </section>
</template>

<script>
import CoffeeListItem from "./CoffeeListItem";
export default {
  props: {
    coffeeList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    CoffeeListItem,
  },
};
</script>

<style lang="scss">
.coffee-list {
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: 0;
    padding: 0;
  }
}
</style>
