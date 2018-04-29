// import Vue from './vue.esm.browser.js'
import dummy from "./components/dummy.js";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    template: "<div>{{ hi }}<dummy/></div>",
    el: "#app",
    components: {
      dummy
    },
    data: {
      hi: "Hello from modules"
    }
  });
});
