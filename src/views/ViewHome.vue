<template>
  <div class="view-home">
    <the-header></the-header>
    <the-main></the-main>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheMain from "../components/TheMain";
export default {
  components: {
    TheHeader,
    TheMain,
  },
};
</script>

<style lang="scss">
.view-home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
