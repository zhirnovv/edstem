<template>
  <div>
    <Searchbar></Searchbar>
    <Navbar brand="Thread name"></Navbar>
    <div
      class="Page__content"
      v-bind:class="{ Page__content_withSearchbar: sharedState.searchbarOpen }"
    >
      <Filters></Filters>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <div>lololololo</div>
      <button v-on:click="test">lol</button>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchbar";
import Filters from "./components/filters/Filters";
import { store } from "./store/store";
export default {
  name: "app",
  data: () => ({
    sharedState: store.state
  }),
  components: {
    Navbar,
    Searchbar,
    Filters
  },
  methods: {
    test() {
      console.log("test");
    }
  }
};
</script>

<style>
@import url("./app.css");
@import url("./assets/css/reset.css");
@import url("./assets/css/main.css");
</style>
