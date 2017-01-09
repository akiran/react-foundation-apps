'use strict';

var React = require('react');
var Animation = require('../utils/animation');
var foundationApi = require('../utils/foundation-api');

var Modal = React.createClass({
  displayName: 'Modal',

  getInitialState: function getInitialState() {
    return { open: false };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      overlay: true,
      overlayClose: true,
      animationIn: 'fadeIn',
      animationOut: 'fadeOut'
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
  hideOverlay: function hideOverlay(e) {
    e.preventDefault();
    if (this.props.overlayClose) {
      this.setState({ open: false });
    }
  },
  stopClickPropagation: function stopClickPropagation(e) {
    e.preventDefault();
    e.stopPropagation();
  },
  render: function render() {
    var overlayStyle = {};
    if (!this.props.overlay) {
      overlayStyle.background = 'transparent';
    }
    return React.createElement(
      Animation,
      { active: this.state.open, animationIn: 'fadeIn', animationOut: 'fadeOut' },
      React.createElement(
        'div',
        { className: 'modal-overlay', style: overlayStyle, onClick: this.hideOverlay },
        React.createElement(
          Animation,
          {
            active: this.state.open,
            animationIn: this.props.animationIn,
            animationOut: this.props.animationOut
          },
          React.createElement(
            'div',
            { id: this.props.id, 'data-closable': true, className: 'modal', onClick: this.stopClickPropagation },
            this.props.children
          )
        )
      )
    );
  }
});

module.exports = Modal;