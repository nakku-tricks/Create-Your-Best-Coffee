<template>
  <div id="app">
    <the-header></the-header>
    <the-main></the-main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheMain from "./components/TheMain";

export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;

  padding: 48px 64px;

  background: #fcfcfc;
}
</style>
