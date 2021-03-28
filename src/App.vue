<template>
  <div id="app">
    <the-home></the-home>
  </div>
</template>

<script>
import TheHome from "./views/TheHome";
export default {
  name: "App",
  components: {
    TheHome,
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
