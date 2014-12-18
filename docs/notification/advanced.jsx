var React = require('react');
var Notification = require('../../lib/notification');
var Notify = require('../../lib/triggers/notify');

var AdvancedNotification = React.createClass({
  render: function () {
    return (
      <div>
        <Notify trigger="main-notifications" title="My notification" content="Notification example" color="success" position="top-left"> 
          <a className="button">Dynamic Notification</a>
        </Notify>
        <Notification.Set id="main-notifications"></Notification.Set>
      </div>
    );
  }
});

module.exports = AdvancedNotification;