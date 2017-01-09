'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var cx = require('classnames');
var ExecutionEnvironment = require('exenv');
var foundationApi = require('../utils/foundation-api');
var Tether = ExecutionEnvironment.canUseDOM && require('tether/tether');

var Popup = React.createClass({
  displayName: 'Popup',

  getInitialState: function getInitialState() {
    return {
      active: false,
      tetherInit: false
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      pinTo: 'top center',
      pinAt: ''
    };
  },
  componentDidMount: function componentDidMount() {
    this.tether = {};
    foundationApi.subscribe(this.props.id, (function (name, msg) {
      if (msg[0] === 'toggle') {
        this.toggle(msg[1]);
      }
    }).bind(this));
  },
  toggle: function toggle(target) {
    var active = !this.state.active;
    this.setState({ active: active }, (function () {
      if (active) {
        this.tetherElement(target);
      } else {
        this.tether.destroy();
      }
    }).bind(this));
  },
  tetherElement: function tetherElement(target) {
    var targetElement = document.getElementById(target);
    var attachment = 'top center';
    this.tether = new Tether({
      element: ReactDOM.findDOMNode(this),
      target: targetElement,
      attachment: attachment
    });
  },
  render: function render() {
    var classes = {
      popup: true,
      'is-active': this.state.active
    };
    return React.createElement(
      'div',
      { id: this.props.id, className: cx(classes), 'data-closable': 'popup' },
      this.props.children
    );
  }
});

module.exports = Popup;