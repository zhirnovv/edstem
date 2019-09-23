import Vue from "vue";
import Hammer from "hammerjs";
import App from "./App.vue";

Vue.directive("pan", {
  bind: function(el, binding) {
    if (typeof binding.value === "function") {
      const mc = new Hammer(el);
      mc.get("pan").set({
        direction: Hammer.DIRECTION_HORIZONTAL,
        threshold: 20
      });
      mc.on("pan", binding.value);
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
