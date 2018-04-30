export default {
  name: "button",
  template: `<div class="card" >
              <div class="card-body">
               <a href="#" class="btn btn-primary btn-lg btn-block">{{text}}</a>
                <span>{{title}}</span>
                <span v-if="betType==='hi'">number>={{playerBet}}</span>
                <span v-if="betType==='low'">number<={{playerBet}}</span>
                <span>Chance: {{chance}}%</span>
                <span>Payout: {{payout}}x</span>
              </div>
            </div>`,
  props: [
    "title",
    "text",
    "onClickHandler",
    "chance",
    "payout",
    "playerBet",
    "betType"
  ]
};
