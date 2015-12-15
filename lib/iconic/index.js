'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ExecutionEnvironment = require('exenv');
var IconicJs = ExecutionEnvironment.canUseDOM && require('../../vendor/iconic.min');
var cloneWithProps = require('react/lib/cloneWithProps');

var Iconic = React.createClass({
  displayName: 'Iconic',

  inject: function inject() {
    var ico = IconicJs();
    ico.inject(ReactDOM.findDOMNode(this));
  },
  componentDidMount: function componentDidMount() {
    this.inject();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.inject();
  },
  render: function render() {
    return React.Children.only(this.props.children);
  }
});

module.exports = Iconic;