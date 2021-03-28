<template>
  <header class="the-header">
    <img class="the-header__logo" src="#" alt="Логотип кофейни" />
    <div class="the-header__account">
      <img src="#" alt="Корзина товаров" class="the-header__account-basket" />
      <div class="the-header__login">
        <p class="the-header__login-name">Bessie Cooper</p>
        <img
          class="the-header__login-img"
          src="#"
          alt="Фотография пользователя"
        />
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

  height: 56px;

  margin-bottom: 40px;

  &__logo {
    width: 170px;
    height: 48px;
  }

  &__account {
    display: flex;
    align-items: center;
  }

  &__account-basket {
    margin-right: 56px;
  }

  &__login {
    display: flex;
    align-items: center;
  }

  &__login-name {
    margin-right: 16px;
  }

  &__login-img {
  }
}
</style>