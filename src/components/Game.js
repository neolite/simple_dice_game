import { getChanceToWin } from "../game/lib/getChanceToWin.js";
import random from "../game/lib/random.js";
import sha256 from "../game/lib/sha256.js";
import gameButton from "./Button.js";
import Scores from "./Scores.js";

export default {
  name: "game",
  template: `
	<div >
		<div class="row">
			<div class="col">
				<h3 class="col"><span>Your balance: </span>{{ playerBalance }}</h3>
				<button class="btn btn-secondary btn-sm" :disabled="playerBalance>0" @click="resetBalance">Earn credits</button>
			</div>
		</div>
		<div class="row" id="scores-panel">
			<scores :hash="numberHash" :num="numberToShow" :status="status"/>
		</div>
		<div class="row">
			<div class="input-group col mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroup-sizing-default">Bet amount</span>
				</div>
				<input v-model="betAmount" type="number" min="1" max="100" step="1" class="form-control text-right" aria-label="Default" aria-describedby="inputGroup-sizing-default">
	
				<div class="input-group-prepend" style="margin-left: auto">
					<span class="input-group-text" id="inputGroup-sizing-default">Number</span>
				</div>
				<input v-model="playerNumber" type="number" min="1" max="100" step="1" class="form-control text-right" aria-label="Default" aria-describedby="inputGroup-sizing-default">
			</div>
		</div>
		<div class="row">
			<div class="input-group col mb-3">
				<game-button
					class="col"  
					text="Bet Low" 
					bet-type="low" 
					:disabled="betAmount && playerNumber"
					:playerBet="playerNumber" 
					:chance="getChanceToWin.playerLowBetChance" 
					:payout="getChanceToWin.lowBetMultiplier"
					@handle-click="bet"
					/>  
				<game-button 
					class="col" 
					text="Bet Hi" 
					bet-type="hi"
					:disabled="betAmount && playerNumber" 
					:playerBet="playerNumber" 
					:chance="getChanceToWin.playerHiBetChance" 
					:payout="getChanceToWin.hiBetMultiplier"
					@handle-click="bet"
				/>  	
			</div>
		</div>
	</div>
	
  `,
  components: {
    gameButton,
    Scores
  },
  watch: {
    betAmount: function(val) {
      // if bet amount dont be a large than player balance
      if (val >= this.playerBalance) {
        this.betAmount = this.playerBalance;
      }
    },
    playerNumber: function(val) {
      if (val > 0) {
        // calc chances to win player, returns playerHiBetChance, playerLowBetChance, hiBetMultiplier, lowBetMultiplier
        this.getChanceToWin = getChanceToWin(this.playerNumber);
      }
    },
    balance: val => {
      // every balance changing save to local storage
      localStorage.setItem("playerBalance", val);
    }
  },
  data: () => {
    return {
      playerBalance: 0,
      playerNumber: 50,
      betAmount: 10,
      gameNumber: null,
      numberHash: "",
      numberToShow: null,
      status: "",
      getChanceToWin: {
        playerHiBetChance: 0,
        playerLowBetChance: 0,
        hiBetMultiplier: 0,
        lowBetMultiplier: 0
      }
    };
  },
  created() {
    this.playerBalance = localStorage.getItem("playerBalance") || 100;
    this.initRound();
  },
  methods: {
    // if bet low & player number less than game number, player wins
    bet(type) {
      if (
        (type === "hi" && this.gameNumber >= this.playerNumber) ||
        (type === "low" && this.gameNumber <= this.playerNumber)
      ) {
        this.status = "WIN";
        this.playerBalance = +this.playerBalance + parseInt(this.betAmount);
      } else {
        this.status = "LOSE";
        this.playerBalance = +this.playerBalance - parseInt(this.betAmount);
      }
      this.numberToShow = this.gameNumber;
      this.playerNumber = 50;
      this.betAmount = 0;
      this.initRound();
    },
    initRound() {
      this.gameNumber = random();
      this.numberHash = sha256(this.gameNumber);
    },
    resetBalance() {
      this.playerBalance = 100;
    }
  }
};
