<template>
  <div style="position: relative; min-height: 100%;">
    <Searchbar></Searchbar>
    <Navbar brand="Thread name"></Navbar>
    <div
      class="Page__content"
      v-bind:class="{ Page__content_withSearchbar: sharedState.searchbarOpen }"
    >
      <Filters></Filters>
      <Thread></Thread>
      <Fab></Fab>
    </div>
    <Form></Form>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar";
import Searchbar from "./components/searchbar/Searchbar";
import Filters from "./components/filters/Filters";
import Thread from "./components/thread/Thread";
import Form from "./components/form/Form";
import Fab from "./components/fab/Fab";
import { store } from "./store/store";
export default {
  name: "app",
  data: () => ({
    sharedState: store.state
  }),
  components: {
    Navbar,
    Searchbar,
    Filters,
    Thread,
    Form,
    Fab
  }
};
</script>

<style>
@import url("./app.css");
@import url("./assets/css/reset.css");
@import url("./assets/css/main.css");
</style>
