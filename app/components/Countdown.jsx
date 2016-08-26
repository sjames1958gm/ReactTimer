var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");

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

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case "stopped":
        break;
        case "started":
          this.startTimer();
        break;
        case "paused":
        break;
      }
    }
  },

  startTimer: function() {
    this.timer = setInterval(() => {
      var count = this.state.count - 1;
      this.setState({count: (count >= 0 ? count: 0)});
    }, 1000);
  },

  render: function() {
  return (
    <div>
      <Clock totalSeconds={this.state.count}/>
      <CountdownForm onSetCountdown={this.handleSetCountdown}/>
    </div>
    );
  }
})

module.exports = Countdown;
