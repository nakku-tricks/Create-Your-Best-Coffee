<template>
  <section class="cart-list">
    <ul class="cart-list__list">
      <cart-list-item
        v-for="(item, idx) in cartList"
        :key="item.id"
        :cartItem="item"
        @removeItem="removeItem(idx)"
      ></cart-list-item>
    </ul>
    <button
      class="cart-list__button"
      v-if="cartList.length"
      @click="postProductsToApi(cartList)"
    >
      Купить
    </button>
  </section>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  props: {
    cartList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  components: {
    CartListItem,
  },
  methods: {
    removeItem(idx) {
      this.$emit("removeItem", idx);
    },
    postProductsToApi(cartList) {
      if (cartList.length) {
        this.$emit("postProductsToApi", cartList);
      }
    },
  },
};
</script>

<style>
</style>
