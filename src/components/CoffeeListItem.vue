<template>
  <li class="coffee-list-item">
    <article class="coffee-list-item__item">
      <div class="coffee-list-item__wrapper">
        <img
          class="coffee-list-item__img"
          :src="require('../assets/img/' + coffee.img)"
          :alt="`Изображение кофе ${coffee.title}`"
        />
        <div class="coffee-list-item__description">
          <h2 class="coffee-list-item__title">{{ coffee.title }}</h2>
          <p class="coffee-list-item__text">
            {{ coffee.description }}
          </p>
          <p class="coffee-list-item__price">{{ coffee.price }}</p>
        </div>
      </div>
      <span class="coffee-list-item__arrow">
        <svg class="coffee-list-item__arrow-logo">
          <use xlink:href="../assets/img/sprite.svg#icon-arrow"></use>
        </svg>
      </span>
      <button class="coffee-list-item__button" @click="addToCart">
        <svg class="coffee-list-item__button-logo">
          <use xlink:href="../assets/img/sprite.svg#icon-button"></use>
        </svg>
      </button>
    </article>
  </li>
</template>

<script>
export default {
  name: "CoffeeListItem",
  props: {
    coffee: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.coffee);
    },
  },
};
</script>

<style lang="scss">
.coffee-list-item {
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

  &__arrow {
    position: absolute;
    right: 75px;
    bottom: -30px;
    transform: rotate(333deg);
  }

  &__arrow-logo {
    width: 55px;
    height: 55px;

    fill: $color-title;
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

  &__price {
    font-size: 30px;
  }

  &__amount {
    align-self: flex-end;
    margin-right: 40px;
    font-size: 24px;
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

    &:active {
      transform: scale(0.8);
    }

    &:focus {
      outline: none;
    }
  }

  &__button-logo {
    width: 100%;
    height: 100%;
  }
}
</style>
