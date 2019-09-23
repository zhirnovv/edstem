<template>
  <button class="Fab" v-on:click="openForm">
    <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 15.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L14.81 7.94l-3.75-3.75L.15 15.1c-.1.1-.15.22-.15.36zM17.71 5.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        fill="#fff"
      />
    </svg>
  </button>
</template>

<script>
import { store } from "../../store/store";
export default {
  name: "Fab",
  data: () => ({
    sharedState: store.state
  }),
  methods: {
    openForm() {
      store.openForm();
      document.documentElement.style.overflow = "hidden";
    }
  }
};
</script>

<style>
@import url("./fab.css");
</style>
