<template>
  <header class="the-header">
    <div class="the-header__logo">
      <svg class="the-header__logo-img">
        <use xlink:href="../assets/img/sprite.svg#icon-logo"></use>
      </svg>
      <p class="the-header__logo-text">
        Создай <br />
        свой <br />
        лучший кофе!
      </p>
    </div>

    <div class="the-header__account">
      <svg class="the-header__account-basket">
        <use xlink:href="../assets/img/sprite.svg#icon-basket"></use>
      </svg>
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

  &__logo-img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }

  &__logo-text {
    text-transform: uppercase;
  }

  &__account {
    display: flex;
    align-items: center;
  }

  &__account-basket {
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
