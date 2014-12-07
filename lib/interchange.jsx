var React = require('react');
var ResponsiveMixin = require('react-responsive-mixin');

var Interchange = React.createClass({
  mixins: [ResponsiveMixin],
  componentDidMount: function () {

  },
  render: function () {
    return (
      <div media='small'>some text</div>
    );
  }
});

module.exports = Interchange;