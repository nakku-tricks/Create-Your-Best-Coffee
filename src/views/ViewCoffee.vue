<template>
  <coffee-list :coffeeList="coffeeList" @addToCart="addToCart"></coffee-list>
</template>

<script>
import CoffeeList from "../components/CoffeeList";
export default {
  name: "ViewCoffee",
  components: {
    CoffeeList,
  },
  created() {
    this.$store.dispatch("getCoffeeList");
  },
  computed: {
    coffeeList() {
      return this.$store.state.Coffees.coffee;
    },
  },
  methods: {
    addToCart(coffeeItem) {
      this.$store.dispatch("addCoffeeToCart", coffeeItem);
    },
  },
};
</script>

<style>
</style>
