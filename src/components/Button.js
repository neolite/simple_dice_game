export default {
  name: "button",
  template: `<div class="card text-left">
              <div class="card-body">
               <a href="#" class="btn btn-primary btn-lg btn-block">{{text}}</a>
                <span>{{title}}</span>
                <p v-if="betType==='hi'"><b>number>=</b>{{playerBet}}</p>
                <p v-if="betType==='low'"><b>number<=</b>{{playerBet}}</p>
                <p><b>Chance:</b> {{chance}}%</p>
                <p><b>Payout:</b> {{payout}}x</p>
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
