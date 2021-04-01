<template>
  <main class="the-main">
    <header class="the-main__header">
      <div class="the-main__sort">
        <p class="the-main__sort-text">Сортировать кофе по..</p>
      </div>
      <div class="the-main__create-button">
        <p class="the-main__create-button-text">Создать свой!</p>
        <button class="the-main__button">+</button>
      </div>
    </header>
    <coffee-list :coffeeList="coffeeList"></coffee-list>
  </main>
</template>

<script>
import CoffeeList from "./CoffeeList";
export default {
  components: {
    CoffeeList,
  },
  mounted() {
    this.$store.dispatch("getCoffeeList");
  },
  computed: {
    coffeeList() {
      return this.$store.state.Coffees.coffee;
    }
  },
};
</script>

<style lang="scss">
.the-main {
  padding: 56px 64px;
  background: #f3f4f7;
  border-radius: 40px;

  height: 90%;

  box-shadow: 0px 0px 10px 3px rgba(4, 139, 244, 0.16) inset;

  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &__header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 40px;
  }

  &__sort {
  }

  &__sort-text {
  }

  &__create-button {
    display: flex;
    align-items: center;
  }

  &__create-button-text {
    margin-right: 20px;
  }

  &__button {
    width: 48px;
    height: 48px;

    font-size: 24px;

    background-color: #4959ff;
    color: #f3f4f7;

    border: none;
    border-radius: 16px;
  }
}
</style>
