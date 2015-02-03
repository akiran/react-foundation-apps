var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var IconicJs = ExecutionEnvironment.canUseDOM && require('../vendor/iconic.min');
var cloneWithProps = require('react/lib/cloneWithProps');

var Iconic = React.createClass({
  inject: function () {
    var ico = IconicJs();
    ico.inject(this.getDOMNode());
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