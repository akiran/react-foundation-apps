var React = require('react');
var SingleSelect = require('./single-select');
var MultiSelect = require('./multi-select');

var Accordians = React.createClass({
  render: function () {
    return (
      <div>
        <h3> Basic </h3>
        <SingleSelect />
        <h3> Advanced </h3>
        <MultiSelect />
      </div>
    );
  }
});

module.exports = Accordians;