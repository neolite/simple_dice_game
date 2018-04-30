import { getChanceToWin } from "../src/game/lib/getChanceToWin.js";

export default () => {
  describe("gameCore", () => {
    it("get player chances on 25", () => {
      let changes = getChanceToWin(25);
      assert.equal(changes.playerHiBetChance, 75);
      assert.equal(changes.playerLowBetChance, 25);
      assert.equal(changes.hiBetMultiplier, 1.33);
      assert.equal(changes.lowBetMultiplier, 4);
    });
  });
};
