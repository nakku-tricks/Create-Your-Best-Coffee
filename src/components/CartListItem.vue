<template>
  <li class="cart-list-item">
    <article class="cart-list-item__item">
      <div class="cart-list-item__wrapper">
        <img
          class="cart-list-item__img"
          :src="require('../assets/img/' + cartItem.img)"
          :alt="`Изображение кофе ${cartItem.title}`"
        />
        <div class="cart-list-item__description">
          <h2 class="cart-list-item__title">{{ cartItem.title }}</h2>
          <p class="cart-list-item__text">
            {{ cartItem.description }}
          </p>
          <p class="cart-list-item__amount">
            Количество: {{ cartItem.amount }}
          </p>
        </div>
        <button class="cart-list-item__button" @click="removeItem">
          <svg class="cart-list-item__button-logo">
            <use xlink:href="../assets/img/sprite.svg#icon-close-button"></use>
          </svg>
        </button>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  props: {
    cartItem: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    removeItem() {
      this.$emit("removeItem");
    },
  },
};
</script>

<style lang="scss">
.cart-list-item {
  display: flex;
  width: calc(33.333% - 30px);
  min-height: 500px;
  margin: 0 15px;
  margin-bottom: 50px;

  &__wrapper {
    display: flex;
    flex-direction: column;

    height: 100%;
  }

  &__item {
    position: relative;

    background: #fcfcfc;

    border-radius: 30px;

    box-shadow: 0px 0px 10px 3px rgb(4 139 244 / 16%);
  }

  &__img {
    margin-bottom: 15px;

    border-radius: 30px 30px 0 0;
  }

  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;

    padding: 0 15px;
    margin-bottom: 20px;
  }

  &__title {
    text-transform: uppercase;
    text-align: center;

    margin-bottom: 15px;

    font-size: 30px;
  }

  &__text {
    font-size: 18px;
    margin-bottom: 20px;

    text-align: center;
  }

  &__amount {
    font-size: 24px;

    text-align: center;
  }

  &__button {
    position: absolute;
    right: -20px;
    bottom: -15px;

    width: 60px;
    height: 60px;

    background-color: transparent;
    border: none;

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

  &__button-logo {
    width: 100%;
    height: 100%;

    fill: #ff3333e0;
  }
}
</style>
