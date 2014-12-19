var React = require('react');
var IconicJs = require('../vendor/iconic.min');

var Iconic = React.createClass({
  componentDidMount: function () {
    var ico = IconicJs();
    ico.inject(this.getDOMNode());
  },
  render: function () {
    return React.Children.only(this.props.children);
  }
});

module.exports = Iconic;