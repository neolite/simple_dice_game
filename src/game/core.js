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

  play(playerNumber, playerBet) {}
}

export default gameCore;
