var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

var Clock = require("Clock");

describe("Clock", () => {
  it('should exist', () => {
    expect(Clock).toExist();
  })

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));

      expect($el.find('.clock-text').text()).toBe("01:02");
    })
  })

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      expect(clock.formatSeconds(615)).toBe("10:15");
    })

    it('should format seconds when min/sec < 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      expect(clock.formatSeconds(61)).toBe("01:01");
    })
  })
})