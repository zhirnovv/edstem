<template>
  <nav class="Navbar__container">
    <Dropdown v-bind:open="sharedState.navbarOpen"></Dropdown>
    <div class="Navbar" v-bind:class="{ Navbar_open: sharedState.navbarOpen }">
      <Hamburger
        v-bind:open="sharedState.navbarOpen"
        v-on:toggleNavbar="toggleNavbar"
      ></Hamburger>
      <div class="Navbar__brand">{{ brand }}</div>
      <SearchButton
        v-bind:open="sharedState.searchbarOpen"
        v-on:toggleSearchbar="toggleSearchbar"
      ></SearchButton>
    </div>
  </nav>
</template>

<script>
import Dropdown from "./partials/dropdown/Dropdown";
import Hamburger from "./partials/hamburger/Hamburger";
import SearchButton from "./partials/searchButton/SearchButton";
import { store } from "../../store/store";
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
    sharedState: store.state
  }),
  methods: {
    toggleNavbar() {
      if (!this.sharedState.navbarOpen) {
        store.openNavbar();
        document.documentElement.style.height = "100%";
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.position = "relative";
      } else {
        store.closeNavbar();
        document.documentElement.style.overflow = "auto";
        document.documentElement.style.position = "static";
      }
    },
    toggleSearchbar() {
      if (!this.sharedState.searchbarOpen) {
        store.openSearchbar();
        document.documentElement.style.overflow = "auto";
      } else {
        store.closeSearchbar();
        document.documentElement.style.overflow = "auto";
      }
    }
  }
};
</script>

<style>
@import url("./navbar.css");
</style>
