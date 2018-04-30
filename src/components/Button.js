export default {
  name: "gameButton",
  template: `<div class="card text-left">
              <div class="card-body">
                <button href="#" :disabled="!disabled" class="btn btn-primary btn-lg btn-block" @click="$emit('handle-click', betType)">{{text}}</button>
                <p v-if="betType==='hi'"><b>number>=</b>{{playerBet}}</p>
                <p v-if="betType==='low'"><b>number<=</b>{{playerBet}}</p>
                <p><b>Chance:</b> {{chance}}%</p>
                <p><b>Payout:</b> {{payout}}x</p>
              </div>
            </div>`,
  props: ["text", "chance", "payout", "playerBet", "betType", "disabled"]
};
