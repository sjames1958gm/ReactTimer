var React = require("react");
var Clock = require("Clock");
var CountdownForm = require("CountdownForm");

var Countdown = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },

  handleSetCountdown: function(count) {
    this.setState({count});
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
