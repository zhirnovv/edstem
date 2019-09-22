<template>
  <div class="Thread" v-on:scroll="handleScroll">
    <div
      class="Thread__sectionTitle"
      v-bind:class="{
        Thread__sectionTitle_withSearchbar: sharedState.searchbarOpen
      }"
    >
      Pinned
    </div>
    <Card></Card>
    <div class="Thread__sectionTitle">
      April 3rd 1989
    </div>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <div class="Thread__sectionTitle">
      July 23rd 1989
    </div>
    <Card></Card>
    <Card></Card>
    <div class="Thread__sectionTitle">
      December 28th 1991
    </div>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <div class="Thread__sectionTitle">
      December 28th 1991
    </div>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
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
  }),
  methods: {
    handleScroll: function() {
      // let fixedElement, fixedElementIndex, nextElement;
      // [...document.getElementsByClassName("Thread__sectionTitle")].map(
      //   (element, index) => {
      //     // get title that should be fixed right now
      //     if (element.getBoundingClientRect().top <= 88) {
      //       fixedElement = element;
      //       fixedElementIndex = index;
      //     }
      //   }
      // );
      // fixedElement.style.position = "fixed";
      // fixedElement.style.top = "88px";
      // nextElement = document.getElementsByClassName("Thread__sectionTitle")[
      //   fixedElementIndex + 1
      // ];
      // if (nextElement.getBoundingClientRect().top <= 120) {
      //   fixedElement.style.position = "absolute";
      //   fixedElement.style.top = "48px";
      // }
      // console.log(
      //   fixedElementIndex,
      //   fixedElementIndex + 1,
      //   fixedElement.getBoundingClientRect().top
      // );
    }
  },
  mounted: function() {
    this.handleScroll();
  }
};
</script>

<style>
@import url("./thread.css");
</style>
