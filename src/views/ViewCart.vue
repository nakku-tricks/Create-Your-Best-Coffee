<template>
  <section class="view-cart">
    <slot name="title-cart" v-if="cartList.length"></slot>
    <cart-list
      :cartList="cartList"
      @removeItem="removeItem"
      @postProductsToApi="postProductsToApi"
      v-if="cartList.length"
    >
    </cart-list>
    <h2 class="view-cart__notification" v-else>Добавьте товар в корзину</h2>
  </section>
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

<style lang="scss">
.view-cart {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  &__notification {
    font-size: 50px;
    margin: auto;
  }
}
</style>
