<template>
  <div>
    <Searchbar></Searchbar>
    <Navbar brand="Thread name"></Navbar>
    <div>lololololo</div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchbar";
export default {
  name: "app",
  components: {
    Navbar,
    Searchbar
  }
};
</script>

<style>
@import url("./assets/css/reset.css");
@import url("./assets/css/main.css");
</style>
