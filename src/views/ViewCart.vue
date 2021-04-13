<template>
  <cart-list
    :cartList="cartList"
    @removeItem="removeItem"
    @postProductsToApi="postProductsToApi"
  >
  </cart-list>
</template>

<script>
import CartList from "../components/CartList";
export default {
  name: "ViewCart",
  components: {
    CartList,
  },
  computed: {
    cartList() {
      return this.$store.state.Cart.cart;
    },
  },
  methods: {
    removeItem(idx) {
      this.$store.dispatch("removeItem", idx);
    },
    postProductsToApi(cartList) {
      if (cartList.length) {
        this.$store.dispatch("postProductsToApi", cartList);
      }
    },
  },
};
</script>

<style>
</style>
