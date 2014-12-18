var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var foundationApi = require('./utils/foundation-api');

var Close = React.createClass({
  close: function (e) {
    e.preventDefault();
    foundationApi.publish(this.props.trigger, 'close');
  },
  render: function () {
    return cloneWithProps(this.props.children, {
      onClick: this.close
    });
  }
});

module.exports = Close;