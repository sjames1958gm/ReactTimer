var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

var Controls = require("Controls");

describe("Controls", () => {

  it('should exist', () => {
    expect(Controls).toExist();
  })

  var func = function() {};

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls timerStatus="started" onStatusChange={func}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');
      
      expect($pauseButton.length).toBe(1);

    })

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls timerStatus="paused" onStatusChange={func}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');
      
      expect($startButton.length).toBe(1);

    })
  })

})