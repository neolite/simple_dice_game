import GameComponent from "../src/components/Game.js";

// вспомогательная функция, выполняющая монтирование и
// возвращающая строку с результатами рендеринга
function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({ propsData: propsData }).$mount();
  return vm.$el.textContent;
}

export default () => {
  describe("gameComponent", () => {
    it("component created is function", () => {
      expect(typeof GameComponent.created).to.equal("function");
    });

    it("sets the correct default data", () => {
      expect(typeof GameComponent.data).to.equal("function");
      const defaultData = GameComponent.data();
      expect(defaultData.playerBalance).to.equal(0);
      expect(defaultData.playerNumber).to.equal(50);
    });

    it("renders the correct message", () => {
      const Constructor = Vue.extend(GameComponent);
      const vm = new Constructor().$mount();
      expect(vm.$el.textContent).to.include("Your balance");
    });

    it("correctly sets the player win", () => {
      const vm = new Vue(GameComponent);
      vm.$mount();
      vm.betAmount = 100;
      vm.gameNumber = 50;
      vm.playerNumber = 50;
      vm.bet("hi");
      expect(typeof vm.bet).to.equal("function");
      expect(vm.playerBalance).to.equal(200);
      expect(vm.status).to.equal("WIN");
    });

    it("correctly sets the player lose", done => {
      const vm = new Vue(GameComponent);
      vm.$mount();
      vm.initRound();
      vm.playerBalance = 100;
      vm.gameNumber = 50;
      vm.playerNumber = 100;
      vm.betAmount = 100;
      expect(typeof vm.bet).to.equal("function");
      vm.bet("hi");

      Vue.nextTick(() => {
        expect(vm.playerBalance).to.equal(0);
        expect(vm.$el.textContent).to.include("LOSE");
        done();
      });
    });
  });
};
