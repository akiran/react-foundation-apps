var React = require('react');
var PubSub = require('pubsub-js');

var Toggle = React.createClass({
  toggle: function (e) {
    e.preventDefault();
    PubSub.publish(this.props.toggleId, 'toggle');
  },
  render: function () {
    return <div onClick={this.toggle}>{this.props.children}</div>;
  }
});

module.exports = Toggle;