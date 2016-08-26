var React = require("react");

var Clock = React.createClass({
  getDefaultProps: function() {
    return {
      totalSeconds: 0
    }
  },

  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    return (minutes < 10 ? "0" : "") + minutes + 
      ":" + 
      (seconds < 10 ? "0" : "") + seconds;
  },

  render: function() {
  return (
    <div className="clock">
      <span className="clock-text">
        {this.formatSeconds(this.props.totalSeconds)}
      </span>
    </div>
    );
  }
});

module.exports = Clock;
