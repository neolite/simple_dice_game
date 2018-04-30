import gameButton from "./Button.js";

export default {
  name: "game",
  template: `
	<div >
		<span>Your balance: </span>
		  <h1>{{ balance }}</h1>
		  <div class="row">
			<game-btn class="col" text="Bet Hi" title="Press to bet" bet-type="hi"/>  
			<game-btn class="col"  text="Bet Low" title="Press to bet" bet-type="low"/>  
		  </div>
	</div>
	
  `,
  components: {
    "game-btn": gameButton
  },
  data: () => {
    return {
      balance: 100
    };
  }
};
