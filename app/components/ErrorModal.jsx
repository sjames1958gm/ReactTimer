var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");

var ErrorModal = React.createClass ({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      title: 'Error'
    };
  },

  componentDidMount: function() {
    var modal = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{this.props.title}</h4>
        <p>{this.props.message}</p>
        <p><button className="button hollow" data-close="">OK</button></p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modal));
    $(ReactDOM.findDOMNode(this)).html($modal);
    
    var modal = new Foundation.Reveal($("#error-modal"));
    modal.open();
  },

  render: function() {

    return ( <div></div>);
  }
});

module.exports = ErrorModal;

