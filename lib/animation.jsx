var React = require('react');
var ReactTransitionEvents = require('react/lib/ReactTransitionEvents');
var CSSCore = require('react/lib/CSSCore');
// var ReactTransitionChildMapping = require('react/lib/ReactTransitionChildMapping');
var cloneWithProps = require('react/lib/cloneWithProps');
var cx = require('react/lib/cx');
var TICK = 17;

var Animation = React.createClass({
  getInitialState: function () {
    return {
     animating : false, 
     animatingEnd : false, 
    };
  },
  getDefaultProps: function () {
    return {
      active: false,
      animationIn: '',
      animationOut: ''
    };
  },
  transition: function(animationClass, animationType, finishCallback) {
    var node = this.getDOMNode();
    var className = 'ng-' + animationType;
    var activeClassName = className + '-active';
    var activeGenericClass = 'is-active';
    var endListener = function(e) {
      if (e && e.target !== node) {
        return;
      }
      CSSCore.removeClass(node, className);
      CSSCore.removeClass(node, activeClassName);
      CSSCore.removeClass(node, animationClass);
      CSSCore.removeClass(node, this.props.active? '' : 'is-active');

      ReactTransitionEvents.removeEndEventListener(node, endListener);

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) { finishCallback(); }
    }.bind(this);
  
    ReactTransitionEvents.addEndEventListener(node, endListener);

    CSSCore.addClass(node, className);
    CSSCore.addClass(node, animationClass);
    CSSCore.addClass(node, 'is-active');

    // Need to do this to actually trigger a transition.
    this.queueClass(activeClassName);
  },
  queueClass: function(className) {
    this.classNameQueue.push(className);

    if (!this.timeout) {
      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
    }
  },
  flushClassNameQueue: function() {
    if (this.isMounted()) {
      this.classNameQueue.forEach(
        CSSCore.addClass.bind(CSSCore, this.getDOMNode())
      );
    }
    this.classNameQueue.length = 0;
    this.timeout = null;
  },
  componentWillMount: function() {
    this.classNameQueue = [];
  },
  componentWillUnmount: function() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      animating: true
    });
  }, 
  componentDidUpdate: function () {
    var animationClass = this.props.active ? this.props.animationIn: this.props.animationOut;
    var animationType = this.props.active ? 'enter': 'leave';
    console.log(this.props.active, animationType, animationClass);
    this.transition(animationClass, animationType);
  },
  render: function () {
    var child = React.Children.only(this.props.children);
    var extraProps = {};
    return cloneWithProps(child, extraProps);
  }
});

module.exports = Animation;