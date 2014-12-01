var React = require('react');
var PubSub = require('pubsub-js');

var Open = React.createClass({
  open: function (e) {
    e.preventDefault();
    PubSub.publish(this.props['data-id'], 'open');
  },
  render: function () {
    return <div onClick={this.open}>{this.props.children}</div>;
  }
});

module.exports = Open;