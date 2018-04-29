const getChanceToWin = (playerBetNumber, maxNumber = 100) => {
  const betChance = betNumber => {
    return Math.floor(betNumber / maxNumber * 100, 1);
  };

  const betMultiplier = bet => Math.floor(100 / playerLowBetChance);

  const playerHiBetChance = betChance(100 - playerBetNumber);
  const playerLowBetChance = betChance(playerBetNumber);

  const hiBetMultiplier = betMultiplier(playerHiBetChance);
  const lowBetMultiplier = betMultiplier(playerLowBetChance);
  //this.maxNumber this.playerBetNumber;
  return {
    playerHiBetChance,
    playerLowBetChance,
    hiBetMultiplier,
    lowBetMultiplier
  };
};
export default getChanceToWin;
