var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");
var Controls = require("Controls");

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  handleSetCountdown: function(count) {
    this.setState({count, countdownStatus: "started"});
  },
 
  handleStatusChange: function(status) {
    this.setState({countdownStatus: status});
  },
 
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case "started":
          this.startTimer();
        break;
        case "stopped":
          this.setState({count: 0});
          this.stopTimer();
        break;
        case "paused":
          this.stopTimer();
        break;
      }
    }
  },

  componentWillUnmount: function() {
     this.stopTimer();
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      var count = this.state.count - 1;
      count = (count > 0 ? count: 0);
      var countdownStatus = this.state.countdownStatus;
      if (count == 0) countdownStatus = "stopped";

      this.setState({count, countdownStatus});
    }, 1000);
  },

  stopTimer: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  render: function() {
    var {countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus != "stopped") {
        return (<Controls
                  timerStatus={countdownStatus}
                  onStatusChange={this.handleStatusChange}/>);
      }
      else {
        return (<CountdownForm 
                  onSetCountdown={this.handleSetCountdown}/>);
      }
    }
  return (
    <div>
      <h1 className="page-title">Countdown Timer</h1>
      <Clock totalSeconds={this.state.count}/>
      {renderControlArea()}
    </div>
    );
  }
})

module.exports = Countdown;
