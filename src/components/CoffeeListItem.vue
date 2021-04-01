<template>
  <li class="coffee-list-item">
    <article class="coffee-list-item__item">
      <div class="coffee-list-item__wrapper">
        <img
          :src="require('../assets/img/' + coffee.img)"
          alt="1"
          class="coffee-list-item__img"
        />
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
  justify-content: space-between;
  flex-wrap: wrap;

  width: calc(33.333% - 32px);

  margin-bottom: 32px;

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__item {
    display: flex;
    flex-direction: column;

    position: relative;

    width: 100%;

    padding: 24px 10px 10px 32px;

    background: #fcfcfc;
    border-radius: 30px;

    box-shadow: 0px 0px 10px 3px rgba(4, 139, 244, 0.16);
  }

  &__img {
    width: 88px;
    height: 88px;

    margin-right: 24px;
  }

  &__description {
  }

  &__title {
    margin-bottom: 12px;
  }

  &__text {
    margin-bottom: 10px;
  }

  &__price {
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
