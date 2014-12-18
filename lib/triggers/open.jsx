var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var foundationApi = require('./utils/foundation-api');

var Open = React.createClass({
  open: function (e) {
    e.preventDefault();
    foundationApi.publish(this.props.trigger, 'open');
  },
  render: function () {
    return cloneWithProps(this.props.children, {
      onClick: this.open
    });
  }
});

module.exports = Open;