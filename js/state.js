/** 主状态对象 */ 
function State(state) {
  this.state = state;
  this.action = function () {
    context.setState(this.state);
  };
}

/** 'State' 状态 */
function StartState() {
  State.call(this, 'Start');
}

/** 'Stop' 状态 */
function StopState() {
  State.call(this, 'Stop');
}

/** 干预对象（上下文） */
function Context() {
  this.state = null;
  this.getState = function() {
    console.info(`It is in ${this.state} state!`);
    return this.state;
  };
  this.setState = function(state) {
    this.state = state;
  }
}

var context = new Context();
var startState = new StartState();
var stopState = new StopState();

startState.action();
context.getState();

stopState.action();
context.getState()
