<template>
  <header class="the-header">
    <div class="the-header__logo">
      <router-link
        class="the-header__logo-wrapper"
        :to="{ name: 'coffeeList' }"
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
    </div>
    <div class="the-header__create-coffee">
      <svg class="the-header__create-logo">
        <use xlink:href="../assets/img/sprite.svg#icon-create-coffee"></use>
      </svg>
    </div>
    <div class="the-header__account">
      <router-link class="the-header__cart" :to="{ name: 'cart' }">
        <svg class="the-header__cart-icon">
          <use xlink:href="../assets/img/sprite.svg#icon-basket"></use>
        </svg>
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
export default {};
</script>

<style lang="scss">
.the-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10%;

  &__logo {
    display: flex;
    align-items: center;
  }

  &__logo-wrapper {
    display: flex;
    align-items: center;
  }

  &__logo-img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }

  &__logo-text {
    text-transform: uppercase;
  }

  &__create-logo {
    width: 70px;
  }

  &__account {
    display: flex;
    align-items: center;
  }

  &__cart-icon {
    width: 60px;
    height: 60px;

    margin-right: 20px;
  }

  &__login {
    display: flex;
    align-items: center;
  }

  &__login-name {
    margin-right: 16px;
  }

  &__login-img {
    width: 70px;

    border-radius: 50%;

    overflow: hidden;
  }
}
</style>
