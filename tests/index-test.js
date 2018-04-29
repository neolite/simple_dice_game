// import gameCore from "../src/game/core";

import getChanceToWin from "../src/game/lib/getChanceToWin";

describe("pow", function() {
  it("возводит в n-ю степень", function() {
    assert.equal(pow(2, 3), 8);
  });
});

describe("gameCore", () => {
  it("get player chnages", () => {
    let changes = getChanceToWin(50);
    assert.equal(changes.playerHiBetChance, 50);
    assert.equal(changes.playerLowBetChance, 50);
    assert.equal(changes.hiBetMultiplier, 2);
    assert.equal(changes.lowBetMultiplier, 2);
  });
});

// playerHiBetChance,
//   playerLowBetChance,
//   hiBetMultiplier,
//   lowBetMultiplier
