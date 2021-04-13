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

<style lang="scss">
.cart-list {
  &__list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 -15px;
  }

  &__button {
    position: fixed;
    bottom: 40px;
    right: 10%;

    width: 150px;
    height: 50px;

    background-color: transparent;
    border: 1px solid black;
    border-radius: 7px;

    font-size: 20px;
    text-transform: uppercase;

    cursor: pointer;

    transition: transform 300ms ease;

    &:focus {
      outline: none;
    }

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1);
    }
  }
}
</style>
