// some parts of code from react/lib/ReactCSSTransitionGroupChild.js
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTransitionEvents = require('react/lib/ReactTransitionEvents');
var CSSCore = require('fbjs/lib/CSSCore');
var TICK = 17;

var Animation = React.createClass({
  displayName: 'Animation',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      animationIn: '',
      animationOut: ''
    };
  },
  reflow: function reflow(node) {
    return node.offsetWidth;
  },
  reset: function reset(node) {
    node.style.transitionDuration = 0;
    CSSCore.removeClass(node, 'ng-enter');
    CSSCore.removeClass(node, 'ng-leave');
    CSSCore.removeClass(node, 'ng-enter-active');
    CSSCore.removeClass(node, 'ng-leave-active');
    CSSCore.removeClass(node, this.props.animationIn);
    CSSCore.removeClass(node, this.props.animationOut);
  },
  finishAnimation: function finishAnimation() {
    var node = ReactDOM.findDOMNode(this);
    this.reset(node);
    CSSCore.removeClass(node, this.props.active ? '' : 'is-active');
    this.reflow(node);
    ReactTransitionEvents.removeEndEventListener(node, this.finishAnimation);
  },
  animate: function animate(animationClass, animationType) {
    var node = ReactDOM.findDOMNode(this);
    var initClass = 'ng-' + animationType;
    var activeClass = initClass + '-active';

    this.reset(node);
    CSSCore.addClass(node, animationClass);
    CSSCore.addClass(node, initClass);
    CSSCore.addClass(node, 'is-active');

    //force a "tick"
    this.reflow(node);

    //activate
    node.style.transitionDuration = '';
    CSSCore.addClass(node, activeClass);

    ReactTransitionEvents.addEndEventListener(node, this.finishAnimation);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      var animationClass = this.props.active ? this.props.animationIn : this.props.animationOut;
      var animationType = this.props.active ? 'enter' : 'leave';
      this.animate(animationClass, animationType);
    }
  },
  render: function render() {
    var child = React.Children.only(this.props.children);
    var extraProps = {};
    return React.cloneElement(child, extraProps);
  }
});

module.exports = Animation;