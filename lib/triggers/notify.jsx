var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var foundationApi = require('../utils/foundation-api');

var Notify = React.createClass({
  notify: function (e) {
    foundationApi.publish(this.props.trigger, {
      title: this.props.title,
      content: this.props.content,
      position: this.props.position,
      color: this.props.color,
      image: this.props.image
    });
    e.preventDefault();
  },
  render: function () {
    return cloneWithProps(React.Children.only(this.props.children), {
      onClick: this.notify
    });
  }
});

module.exports = Notify;