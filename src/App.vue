<template>
  <div id="app">
    <the-header></the-header>
    <the-home></the-home>
  </div>
</template>

<script>
import TheHome from "./views/ViewHome";
import TheHeader from "./components/TheHeader";
export default {
  name: "App",
  components: {
    TheHome,
    TheHeader,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  height: 100vh;

  padding: 0 35px;

  background: #ffffff;
}
</style>
