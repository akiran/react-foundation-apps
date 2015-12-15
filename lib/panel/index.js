'use strict';

var React = require('react');
var Animation = require('../utils/animation');
var foundationApi = require('../utils/foundation-api');

var Panel = React.createClass({
  displayName: 'Panel',

  getInitialState: function getInitialState() {
    return { open: false };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      position: 'left'
    };
  },
  componentDidMount: function componentDidMount() {
    foundationApi.subscribe(this.props.id, (function (name, msg) {
      if (msg === 'open') {
        this.setState({ open: true });
      } else if (msg === 'close') {
        this.setState({ open: false });
      } else if (msg === 'toggle') {
        this.setState({ open: !this.state.open });
      }
    }).bind(this));
  },
  componentWillUnmount: function componentWillUnmount() {
    foundationApi.unsubscribe(this.props.id);
  },
  render: function render() {
    var animationIn, animationOut;
    var classes = 'panel panel-' + this.props.position;
    if (this.props.className) {
      classes += ' ' + this.props.className;
    }
    if (this.props.position === 'left') {
      animationIn = this.props.animationIn || 'slideInRight';
      animationOut = this.props.animationOut || 'slideOutLeft';
    } else if (this.props.position === 'right') {
      animationIn = this.props.animationIn || 'slideInLeft';
      animationOut = this.props.animationOut || 'slideOutRight';
    } else if (this.props.position === 'top') {
      animationIn = this.props.animationIn || 'slideInDown';
      animationOut = this.props.animationOut || 'slideOutUp';
    } else if (this.props.position === 'bottom') {
      animationIn = this.props.animationIn || 'slideInUp';
      animationOut = this.props.animationOut || 'slideOutBottom';
    }
    return React.createElement(
      Animation,
      { active: this.state.open, animationIn: animationIn, animationOut: animationOut },
      React.createElement(
        'div',
        { 'data-closable': true, id: this.props.id, className: classes },
        this.props.children
      )
    );
  }
});

module.exports = Panel;