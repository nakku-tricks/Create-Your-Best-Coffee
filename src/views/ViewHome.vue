<template>
  <div class="view-home">
    <the-main></the-main>
  </div>
</template>

<script>
import TheMain from "../components/TheMain";
export default {
  name: "ViewHome",
  components: {
    TheMain,
  },
};
</script>

<style lang="scss">
.view-home {
  display: flex;
  flex-direction: column;

  height: 80%;

  margin: 0 25px;
  padding: 45px 55px;

  background: #f3f4f7;

  border-radius: 40px;

  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
