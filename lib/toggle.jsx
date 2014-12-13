var React = require('react');
var foundationApi = require('./utils/foundation-api');

var Toggle = React.createClass({
  toggle: function (e) {
    e.preventDefault();
    foundationApi.publish(this.props.trigger, 'toggle');
  },
  render: function () {
    return <div onClick={this.toggle}>{this.props.children}</div>;
  }
});

module.exports = Toggle;