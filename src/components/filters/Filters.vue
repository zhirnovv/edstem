<template>
  <div>
    <div
      class="Filter"
      v-bind:class="{ Filter__withSearchbar: sharedState.searchbarOpen }"
    >
      <div
        class="Filter__toggler"
        v-on:click="toggleFilters"
        v-bind:class="{ Filter__toggler_open: sharedState.filtersOpen }"
        v-if="sharedState.currentFilter === 'all'"
      >
        All
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="Filter__togglerIcon"
          v-bind:class="{ Filter__togglerIcon_active: sharedState.filtersOpen }"
        >
          <path d="M7 10l5 5 5-5z" fill="#0085ff" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
      <div
        class="Filter__toggler"
        v-on:click="toggleFilters"
        v-bind:class="{ Filter__toggler_open: sharedState.filtersOpen }"
        v-else
      >
        {{ sharedState.currentFilter }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="Filter__togglerIcon"
          v-bind:class="{ Filter__togglerIcon_active: sharedState.filtersOpen }"
        >
          <path d="M7 10l5 5 5-5z" fill="#0085ff" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
      <div
        class="Filter__items"
        v-bind:class="{ Filter__items_open: sharedState.filtersOpen }"
      >
        <div
          class="Filter__item"
          v-bind:class="{
            Filter__item_current: sharedState.currentFilter === item
          }"
          v-bind:key="index"
          v-for="(item, index) in filterItems"
          v-on:click="selectFilter(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div
      class="Filter__shadow"
      v-bind:class="{ Filter__shadow_open: sharedState.filtersOpen }"
      v-on:click="toggleFilters"
    ></div>
  </div>
</template>

<script>
import { store } from "../../store/store";
export default {
  name: "Filters",
  data: () => ({
    sharedState: store.state,
    filterItems: ["Pinned", "Starred", "Question", "Discussion", "Announcement"]
  }),
  methods: {
    toggleFilters() {
      if (!this.sharedState.filtersOpen) {
        store.openFilters();
        document.documentElement.style.overflow = "hidden";
      } else {
        store.closeFilters();
        document.documentElement.style.overflow = "auto";
      }
    },
    selectFilter(filter) {
      if (this.sharedState.currentFilter === filter) {
        console.log("filter matches");
        store.selectFilter("all");
        this.toggleFilters();
        return;
      }
      store.selectFilter(filter);
      this.toggleFilters();
    }
  }
};
</script>

<style>
@import url("./filters.css");
</style>
