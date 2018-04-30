const betMultiplier = bet => (100 / bet).toFixed(2);

const getBetChance = (bet, number = 100) => {
  return (bet / number * 100).toFixed(2);
};
// Calculates percent of win or lose
const getChanceToWin = (playerBetNumber, maxNumber = 100) => {
  const playerHiBetChance = getBetChance(100 - playerBetNumber);
  const playerLowBetChance = getBetChance(playerBetNumber);

  const hiBetMultiplier = betMultiplier(playerHiBetChance);
  const lowBetMultiplier = betMultiplier(playerLowBetChance);

  return {
    playerHiBetChance,
    playerLowBetChance,
    hiBetMultiplier,
    lowBetMultiplier
  };
};
export { getChanceToWin };
