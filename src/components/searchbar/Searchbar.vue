<template>
  <div
    class="Searchbar__container"
    v-bind:class="{ Searchbar__container_open: sharedState.searchbarOpen }"
  >
    <form class="Searchbar">
      <input class="Searchbar__input" placeholder="AVL Tree algorithm" />
      <label for="search">
        <svg
          class="Searchbar__submitIcon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            fill="#78508c"
          />
        </svg>
      </label>
      <input id="search" type="submit" class="Searchbar__submit" value="" />
    </form>
  </div>
</template>

<script>
import { store } from "../../store/store";
export default {
  name: "Searchbar",
  data: () => ({
    sharedState: store.state
  })
};
</script>

<style>
@import url("./searchbar.css");
</style>
