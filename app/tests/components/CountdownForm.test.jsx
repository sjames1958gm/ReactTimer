var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");

var CountdownForm = require("CountdownForm");

describe("CountdownForm", () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  })

  it ("should get called on valid number", () => {
    var spy = expect.createSpy();
    var countdownForm = 
        TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '123';
    TestUtils.Simulate.submit($el.find('form')[0]);

    it('should get called', () => {
      expect(spy).toHaveBeenCalledWith(123);
    });
  });

  it ("should not get called on invalid number", () => {
    var spy = expect.createSpy();
    var countdownForm = 
        TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '123A';
    TestUtils.Simulate.submit($el.find('form')[0]);

    it('should not get called', () => {
      expect(spy).toNotHaveBeenCalled();
    });
    
    countdownForm.refs.seconds.value = '123A';
    TestUtils.Simulate.submit($el.find('form')[0]);

    it('should not get called', () => {
      expect(spy).toNotHaveBeenCalled();
    });

    countdownForm.refs.seconds.value = 'A123';
    TestUtils.Simulate.submit($el.find('form')[0]);

    it('should not get called', () => {
      expect(spy).toNotHaveBeenCalled();
    });

    countdownForm.refs.seconds.value = '1b23';
    TestUtils.Simulate.submit($el.find('form')[0]);

    it('should not get called', () => {
      expect(spy).toNotHaveBeenCalled();
    });

    countdownForm.refs.seconds.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    it('should not get called', () => {
      expect(spy).toNotHaveBeenCalled();
    });
  });
});