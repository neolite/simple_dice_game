export default {
  template: `
    <div class="col">
      <div class="card">
        <div class="card-header">
          SCORES
        </div>
        <div class="card-body">
        <div class="row score-block">
          <div class="col col-sm-6 display-score">
            {{num}}
          </div>
          <div class="col col-sm-6 display-score">
            {{status.toUpperCase()}}
          </div>
        </div>
        <span class="text-left"><b>Hash:</b>{{hash}}</span>  
        </div>
      </div>
    </div>
  `,
  props: {
    hash: {
      type: String,
      default: ""
    },
    num: {
      type: Number,
      default: null
    },
    status: {
      type: String,
      default: ""
    }
  }
};
