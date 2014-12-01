var React = require('react');
var PubSub = require('pubsub-js');

var Close = React.createClass({
  close: function (e) {
    e.preventDefault();
    PubSub.publish(this.props['data-id'], 'close');
  },
  render: function () {
    return <div onClick={this.close}>{this.props.children}</div>;
  }
});

module.exports = Close;