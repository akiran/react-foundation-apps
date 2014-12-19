var React = require('react');
var Accordion = require('../../lib/accordion');

var MultiSelect = React.createClass({
  render: function () {
    return (
      <Accordion multiOpen={true} autoOpen={false} >
        <Accordion.Item title='First item title'> First item content </Accordion.Item>
        <Accordion.Item title='Second item title'> Second item content </Accordion.Item>
        <Accordion.Item title='Third item title'> Third item content </Accordion.Item>
      </Accordion>
    );
  }
});

module.exports = MultiSelect;