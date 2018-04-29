import sha from "./lib/sha256";
import { getRandom100 } from "./lib/random";

class gameCore {
  constructor(playerBalance = 100) {
    this.maxNumber = 100;
    this.playerBalance = playerBalance;
    this.bet = 0;
    generateRandomNumber();
  }

  generateRandomNumber() {
    this.randomNumber = getRandom100();
    this.randomNumberHash = sha(this.randomNumber);
  }

  getFreeCredits() {
    if (this.playerBalance === 0) {
      this.playerBalance = 100;
    }
  }

  getPlayerBalance() {
    return this.playerBalance;
  }

  setBetAmount(bet = 1) {
    const playerBalance = getPlayerBalance();
    this.betAmount = bet > playerBalance ? playerBalance : bet;
  }

  setPlayerBetNumber(number) {
    this.playerBetNumber = number;
  }

  canGetFreeCredits() {
    return this.playerBalance === 0;
  }

  getChanceToWin(playerBetNumber, maxNumber = 100) {
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
  }

  play(playerNumber, playerBet) {}
}

export default gameCore;

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
export const { getChanceToWin };
