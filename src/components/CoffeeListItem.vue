<template>
  <li class="coffee-list-item">
    <article class="coffee-list-item__item">
      <div class="coffee-list-item__wrapper">
        <div class="coffee-list-item__img">
          <img
            :src="require('../assets/img/' + coffee.img)"
            :alt="`Изображение кофе ${coffee.title}`"
          />
        </div>
        <div class="coffee-list-item__description">
          <h2 class="coffee-list-item__title">{{ coffee.title }}</h2>
          <p class="coffee-list-item__text">
            {{ coffee.description }}
          </p>
          <p class="coffee-list-item__price">{{ coffee.price }}</p>
        </div>
      </div>
      <button class="coffee-list-item__button">+</button>
    </article>
  </li>
</template>

<script>
export default {
  props: {
    coffee: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
.coffee-list-item {
  display: flex;

  width: calc(50% - 32px);

  margin-bottom: 32px;

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__item {
    display: flex;

    position: relative;

    width: 100%;
    min-height: 250px;

    background: #fcfcfc;
    border-radius: 30px;

    box-shadow: 0px 0px 10px 3px rgba(4, 139, 244, 0.16);
  }

  &__img {

    margin-right: 24px;
  }

  &__description {
    display: flex;
    flex-direction: column;
  }

  &__title {
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  &__text {
    font-size: 18px;
    margin-bottom: 10px;
  }

  &__price {
    align-self: flex-end;
    margin-right: 40px;
    font-size: 24px;
  }

  &__button {
    position: absolute;
    right: -9px;
    bottom: -9px;
    width: 38px;
    height: 38px;
    font-size: 24px;
    background-color: #4959ff;
    color: #f3f4f7;
    border: none;
    border-radius: 16px;
  }
}
</style>
