var React = require('react');
var PubSub = require('pubsub-js');
var cloneWithProps = require('react/lib/cloneWithProps');

var Open = React.createClass({
  open: function (e) {
    e.preventDefault();
    PubSub.publish(this.props.openId, 'open');
  },
  render: function () {
    return cloneWithProps(this.props.children, {
      onClick: this.open
    });
  }
});

module.exports = Open;