var React = require('react');
var Notification = require('../../lib/notification');
var Open = require('../../lib/triggers/open');

var Static = React.createClass({
  render: function () {
    return (
      <div>
        <Open trigger='my-notify'>
          <a className='button'>Static notifications</a>
        </Open>
        <Notification.Static id='my-notify' title="My static notification" image="">
          <p>This notification is static, it works similarly to a programmatic with some subtle differences</p>
        </Notification.Static>
      </div>
    );
  }
});

module.exports = Static;