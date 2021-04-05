<template>
  <main class="the-main">
    <coffee-list :coffeeList="coffeeList"></coffee-list>
  </main>
</template>

<script>
import CoffeeList from "./CoffeeList";
export default {
  components: {
    CoffeeList,
  },
  mounted() {
    this.$store.dispatch("getCoffeeList");
  },
  computed: {
    coffeeList() {
      return this.$store.state.Coffees.coffee;
    },
  },
};
</script>

<style lang="scss">
.the-main {
  height: 100%;


}
</style>
