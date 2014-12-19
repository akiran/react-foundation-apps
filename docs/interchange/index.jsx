var React = require('react');
var BasicInterchange = require('./basic');

var InterchangeDocs = React.createClass({
  render: function () {
    return (
      <div>
         <BasicInterchange /> 
      </div>
    );
  }
});

module.exports = InterchangeDocs;