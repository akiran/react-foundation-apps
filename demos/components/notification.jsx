var React = require('react');
var NotificationStatic = require('../../lib/notification-static');
var Open = require('../../lib/open');

var NotificationDemos = React.createClass({
  render: function () {
    return (
      <div>
        <Open data-id='my-notify'><a>Static notifications</a></Open>
        <NotificationStatic id='my-notify' title="My static notification" image=""/>
      </div>
    );
  }
});

module.exports = NotificationDemos;