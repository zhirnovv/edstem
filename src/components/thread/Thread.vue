<template>
  <div class="Thread">
    <div
      class="Thread__sectionTitle"
      v-bind:class="{
        Thread__sectionTitle_withSearchbar: sharedState.searchbarOpen
      }"
    >
      Pinned
    </div>
    <Card title="Semester 3 Project guidelines" :type="0"></Card>
    <div class="Thread__sectionTitle">
      April 3rd 1989
    </div>
    <Card
      title="How to use C++ lambda functions in comparators?"
      :type="1"
    ></Card>
    <Card title="Grading system for Math 102" :type="2"></Card>
    <Card title="Lorem ipsum ist dolor" :type="0"></Card>
    <div class="Thread__sectionTitle">
      July 23rd 1989
    </div>
    <Card title="Lorem ipsum ist dolor" :type="0"></Card>
    <Card title="Lorem ipsum ist dolor" :type="0"></Card>
    <div class="Thread__sectionTitle">
      December 28th 1991
    </div>
    <Card title="Lorem ipsum ist dolor" :type="0"></Card>
    <Card title="Lorem ipsum ist dolor" :type="0"></Card>
    <Card title="Lorem ipsum ist dolor" :type="0"></Card>
    <Card title="Lorem ipsum ist dolor" :type="0"></Card>
  </div>
</template>

<script>
import { store } from "../../store/store";
import Card from "./partials/card/Card";
export default {
  name: "Thread",
  components: {
    Card
  },
  data: () => ({
    sharedState: store.state
  })
};
</script>

<style>
@import url("./thread.css");
</style>
