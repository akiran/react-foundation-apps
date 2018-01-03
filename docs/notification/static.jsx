var React = require('react');
var Notification = require('../../src/notification');
var Trigger = require('../../src/trigger')

class Static extends React.Component {
  render() {
    return (
      <div>
        <Trigger open='my-notify'>
          <a className='button'>Static notifications</a>
        </Trigger>
        <Notification.Static id='my-notify' title="My static notification" image="">
          <p>This notification is static, it works similarly to a programmatic with some subtle differences</p>
        </Notification.Static>
      </div>
    );
  }
}

module.exports = Static;