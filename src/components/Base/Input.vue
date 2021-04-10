<template>
  <input class="base-input" type="text" v-model.trim="getValue" />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    getValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("setValue", value);
      },
    },
  },
};
</script>

<style>
</style>
