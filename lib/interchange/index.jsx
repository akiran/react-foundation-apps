var React = require('react');

var Interchange = React.createClass({
  componentDidMount: function () {

  },
  render: function () {
    return <div>{this.props.children}</div>;
  }
});

module.exports = Interchange;