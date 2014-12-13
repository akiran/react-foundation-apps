var React = require('react');
var foundationApi = require('./utils/foundation-api');

var HardToggle = React.createClass({
  toggle: function (e) {
    e.preventDefault();
    foundationApi.closeActiveElements({exclude: this.props.toggleId});
    foundationApi.publish(this.props.toggleId, 'toggle');
  },
  render: function () {
    return <div onClick={this.toggle}>{this.props.children}</div>;
  }
});

module.exports = HardToggle;