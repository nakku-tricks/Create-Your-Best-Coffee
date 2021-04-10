<template>
  <coffee-list :coffeeList="coffeeList" @addToCart="addToCart"></coffee-list>
</template>

<script>
import CoffeeList from "../components/CoffeeList";
export default {
  components: {
    CoffeeList,
  },
  data() {
    return {
      cartList: [],
    };
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
      if (this.cartList.length) {
        let isExist = false;
        this.cartList.map((elem) => {
          if (elem.id === coffeeItem.id) {
            isExist = true;
            elem.amount++;
          }
        });
        if (!isExist) {
          coffeeItem.amount = 1;
          this.cartList.push(coffeeItem);
        }
      } else {
        coffeeItem.amount = 1;
        this.cartList.push(coffeeItem);
      }
      this.$store.dispatch("addCoffeeToCart", coffeeItem);
    },
  },
};
</script>

<style>
</style>
