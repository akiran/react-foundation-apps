var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var foundationApi = require('../utils/foundation-api');
var Animation = require('../utils/animation');
var Notification = require('./notification');

var NotificationStatic = React.createClass({
  displayName: 'NotificationStatic',

  getInitialState: function () {
    return { open: false };
  },
  componentDidMount: function () {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'open') {
        this.setState({ open: true });
      } else if (msg === 'close') {
        this.setState({ open: false });
      }
    }.bind(this));
  },
  componentWillUnmount: function () {
    foundationApi.unsubscribe(this.props.id);
  },
  closeHandler: function (e) {
    this.setState({ open: false });
    e.preventDefault();
    e.stopPropagation();
  },
  render: function () {
    return React.createElement(
      Animation,
      { active: this.state.open, animationIn: 'fadeIn', animationOut: 'fadeOut' },
      React.createElement(
        Notification,
        _extends({}, this.props, { closeHandler: this.closeHandler }),
        this.props.children
      )
    );
  }
});

module.exports = NotificationStatic;