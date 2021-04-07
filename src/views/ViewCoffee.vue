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
    addToCart(value) {
      if (this.cartList.length) {
        let isExist = false;
        this.cartList.map((elem) => {
          if (elem.id === value.id) {
            isExist = true;
            elem.amount++;
          }
        });
        if (!isExist) {
          value.amount = 1;
          this.cartList.push(value);
        }
      } else {
        value.amount = 1;
        this.cartList.push(value);
      }
      this.$store.dispatch("addCoffeeToCart", this.cartList);
    },
  },
};
</script>

<style>
</style>
