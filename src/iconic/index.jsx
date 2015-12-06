var React = require('react');
var ReactDOM = require('react-dom');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var IconicJs = ExecutionEnvironment.canUseDOM && require('../vendor/iconic.min');


var Iconic = React.createClass({
  inject: function () {
    var ico = IconicJs();
    ico.inject(ReactDOM.findDOMNode(this));
  },
  componentDidMount: function () {
    this.inject();
  },
  componentDidUpdate: function () {
    this.inject();
  },
  render: function () {
    return React.Children.only(this.props.children);
  }
});

module.exports = Iconic;