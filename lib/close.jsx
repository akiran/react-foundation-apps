var React = require('react');
var PubSub = require('pubsub-js');
var cloneWithProps = require('react/lib/cloneWithProps');

var Close = React.createClass({
  close: function (e) {
    e.preventDefault();
    PubSub.publish(this.props.closeId, 'close');
  },
  render: function () {
    return cloneWithProps(this.props.children, {
      onClick: this.close
    });
  }
});

module.exports = Close;