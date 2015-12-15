'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var foundationApi = require('../utils/foundation-api');
var Notification = require('./notification');
var Animation = require('../utils/animation');

var NotificationSet = React.createClass({
  displayName: 'NotificationSet',

  getInitialState: function getInitialState() {
    return { notifications: [] };
  },
  componentDidMount: function componentDidMount() {
    foundationApi.subscribe(this.props.id, (function (name, msg) {
      if (msg === 'clearall') {
        this.clearAll();
      } else {
        this.addNotification(msg);
      }
    }).bind(this));
  },
  addNotification: function addNotification(notification) {
    notification.id = foundationApi.generateUuid();
    var notifications = this.state.notifications.concat(notification);
    this.setState({
      notifications: notifications
    });
  },
  removeNotifcation: function removeNotifcation(id) {
    return (function (e) {
      var notifications = [];
      this.state.notifications.forEach(function (notification) {
        if (notification.id !== id) {
          notifications.push(notification);
        }
      });
      this.setState({
        notifications: notifications
      });
      e.preventDefault();
    }).bind(this);
  },
  clearAll: function clearAll() {
    this.setState({ notifications: [] });
  },
  render: function render() {
    var notifications = this.state.notifications.map((function (notification) {
      return React.createElement(
        Notification,
        _extends({ key: notification.id }, notification, { closeHandler: this.removeNotifcation(notification.id), className: 'is-active' }),
        notification.content
      );
    }).bind(this));
    return React.createElement(
      'div',
      null,
      notifications
    );
  }
});

module.exports = NotificationSet;