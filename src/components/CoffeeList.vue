<template>
  <section class="coffee-list">
    <ul class="coffee-list__list">
      <coffee-list-item></coffee-list-item>
    </ul>
  </section>
</template>

<script>
import CoffeeListItem from "./CoffeeListItem";
export default {
  components: {
    CoffeeListItem,
  },
};
</script>

<style lang="scss">
.coffee-list {
  height: 90%;

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: 0;
    padding: 0;
  }
}
</style>
