<template>
  <button
    class="hamburger hamburger--squeeze"
    v-bind:class="{ 'is-active': open }"
    v-on:click="$emit('toggleNavbar')"
    type="button"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    open: Boolean
  }
};
</script>

<style>
@import url("./hamburger.css");
</style>
