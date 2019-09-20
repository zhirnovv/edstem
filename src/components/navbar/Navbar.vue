<template>
  <nav class="Navbar__container">
    <Dropdown v-bind:open="navbarOpen"></Dropdown>
    <div class="Navbar" v-bind:class="{ Navbar_open: navbarOpen }">
      <Hamburger
        v-bind:open="navbarOpen"
        v-on:toggleNavbar="toggle('navbarOpen')"
      ></Hamburger>
      <div class="Navbar__brand">{{ brand }}</div>
      <SearchButton
        v-bind:open="searchbarOpen"
        v-on:toggleSearchbar="toggleSearchbar"
      ></SearchButton>
    </div>
  </nav>
</template>

<script>
import Dropdown from "./partials/dropdown/Dropdown";
import Hamburger from "./partials/hamburger/Hamburger";
import SearchButton from "./partials/searchButton/SearchButton";
export default {
  name: "Navbar",
  components: {
    Dropdown,
    Hamburger,
    SearchButton
  },
  props: {
    brand: String
  },
  data: () => ({
    navbarOpen: false,
    searchbarOpen: false
  }),
  methods: {
    toggle(state) {
      this[state] = !this[state];
    },
    toggleSearchbar() {
      if (this.navbarOpen) {
        this.toggle("navbarOpen");
      }
      this.toggle("searchbarOpen");
    }
  }
};
</script>

<style>
@import url("./navbar.css");
</style>
