var React = require('react');
var NotificationStatic = require('../../lib/notification-static');
var Open = require('../../lib/open');

var Static = React.createClass({
  render: function () {
    return (
      <div>
        <Open openId='my-notify'>
          <a className='button'>Static notifications</a>
        </Open>
        <NotificationStatic id='my-notify' title="My static notification" image="">
          <p>This notification is static, it works similarly to a programmatic with some subtle differences</p>
        </NotificationStatic>
      </div>
    );
  }
});

module.exports = Static;