// import Vue from './vue.esm.browser.js'
import game from "./components/Game.js";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    template: "<div id='app' class='col'>{{ hi }}<game/></div>",
    el: "#app",
    components: {
      game
    },
    data: {
      hi: "Simple Dice game"
    }
  });
});
