import { getChanceToWin } from "../game/lib/getChanceToWin.js";
import gameButton from "./Button.js";
import Scores from "./Scores.js";

export default {
  name: "game",
  template: `
	<div >
		<div class="row">
			
			<h3 class="col"><span>Your balance: </span>{{ balance }}</h3>
		</div>
		<div class="row">
			<scores/>	
		</div>
		<div class="row">
			<div class="input-group col mb-3">
				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroup-sizing-default">Bet amount</span>
				</div>
				<input v-model="betAmount" type="number" min="1" max="100" step="1" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">

				<div class="input-group-prepend">
					<span class="input-group-text" id="inputGroup-sizing-default">Number</span>
				</div>
				<input v-model="playerNumber" type="number" min="1" max="100" step="1" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
			</div>

		</div>
		<div class="row">
			<game-btn 
				class="col" 
				text="Bet Hi" 
				bet-type="hi" 
				:playerBet="playerNumber" 
				:chance="getChanceToWin.playerHiBetChance" 
				:payout="getChanceToWin.hiBetMultiplier"
			/>  
			<game-btn 
				class="col"  
				text="Bet Low" 
				bet-type="low" 
				:playerBet="playerNumber" 
				:chance="getChanceToWin.playerLowBetChance" 
				:payout="getChanceToWin.lowBetMultiplier"
				/>  
		</div>
	</div>
	
  `,
  components: {
    "game-btn": gameButton,
    scores: Scores
  },
  watch: {
    playerNumber: function(val) {
      console.log({ val });
      if (val > 0) {
        this.getChanceToWin = getChanceToWin(this.playerNumber);
      }
    }
  },
  data: () => {
    return {
      balance: 100,
      playerNumber: 0,
      betAmount: 0,
      getChanceToWin: {
        playerHiBetChance: 0,
        playerLowBetChance: 0,
        hiBetMultiplier: 0,
        lowBetMultiplier: 0
      }
    };
  }
};
//  playerHiBetChance, playerLowBetChance, hiBetMultiplier, lowBetMultiplier;
