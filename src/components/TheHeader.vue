<template>
  <header class="the-header">
    <div class="the-header__logo">
      <router-link
        class="the-header__logo-wrapper"
        :to="{ name: 'createCoffee' }"
        v-if="this.$route.name === 'coffeeList'"
      >
        <svg class="the-header__logo-img">
          <use xlink:href="../assets/img/sprite.svg#icon-logo"></use>
        </svg>
        <p class="the-header__logo-text">
          Создай <br />
          свой <br />
          лучший кофе!
        </p>
      </router-link>
      <router-link
        class="the-header__logo-wrapper"
        :to="{ name: 'coffeeList' }"
        v-if="
          this.$route.name === 'createCoffee' || this.$route.path === '/Cart'
        "
      >
        <svg class="the-header__create-logo">
          <use xlink:href="../assets/img/sprite.svg#icon-create-coffee"></use>
        </svg>
        <p class="the-header__logo-text">
          Хочу <br />
          Купить <br />
          ваш кофе!
        </p>
      </router-link>
    </div>
    <div class="the-header__account">
      <router-link class="the-header__cart" :to="{ name: 'cart' }">
        <svg class="the-header__cart-icon">
          <use xlink:href="../assets/img/sprite.svg#icon-basket"></use>
        </svg>
        <span class="the-header__cart-item-count" v-if="amountItemCart !== 0"
          >{{ amountItemCart }}
        </span>
      </router-link>
      <div class="the-header__login">
        <p class="the-header__login-name">Bessie Cooper</p>
        <div class="the-header__login-img">
          <img
            src="../assets/img/User-avatar.jpg"
            alt="Фотография пользователя"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    amountItemCart() {
      return this.$store.getters.amountItemCart;
    },
  },
};
</script>

<style lang="scss">
.the-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1900px;
  width: 100%;

  height: 10%;

  &__logo {
    display: flex;
    align-items: center;

    transition: transform 300ms ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__logo-wrapper {
    display: flex;
    align-items: center;
  }

  &__logo-img {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }

  &__logo-text {
    text-transform: uppercase;
  }

  &__create-logo {
    width: 70px;
    height: 70px;

    margin-right: 20px;
  }

  &__account {
    display: flex;
    align-items: center;
  }

  &__cart {
    display: flex;

    position: relative;

    transition: transform 300ms ease;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  &__cart-icon {
    width: 60px;
    height: 60px;

    margin-right: 20px;

    fill: $color-title;
  }

  &__cart-item-count {
    position: absolute;
    bottom: 4px;
    left: 25px;

    color: $color-title;

    font-weight: bold;
  }

  &__login {
    display: flex;
    align-items: center;
  }

  &__login-name {
    font-size: 18px;
    margin-right: 16px;
  }

  &__login-img {
    width: 70px;

    border-radius: 50%;

    overflow: hidden;
  }
}
</style>
