<template>
  <main class="the-main">
    <router-view>
      <template v-slot:title-constructor>
        <h1 class="the-main__title">Ваш конструктор:</h1>
      </template>
      <template v-slot:title-coffee-list>
        <h1 class="the-main__title">Cписок напитков:</h1>
      </template>
      <template v-slot:title-cart>
        <h1 class="the-main__title">Корзина товаров:</h1>
      </template>
    </router-view>
  </main>
</template>

<script>
export default {
  name: "TheMain",
};
</script>

<style lang="scss">
.the-main {
  height: 100%;

  &__title {
    font-size: 50px;

    margin-bottom: 40px;
    margin-top: 20px;
  }
}
</style>
