var React = require("react");
var Clock = require("Clock");
var Controls = require("Controls");

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
 
  handleStatusChange: function(status) {
    this.setState({timerStatus: status});
  },
 
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timerStatus != prevState.timerStatus) {
      switch (this.state.timerStatus) {
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
      var count = this.state.count + 1;

      this.setState({count});
    }, 1000);
  },

  stopTimer: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },

  render: function() {
    var {timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={this.state.count}/>
        <Controls timerStatus={timerStatus}
                  onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
