var React = require('react');
var Accordion = require('../../lib/accordion');

var SingleSelect = React.createClass({
  render: function () {
    return (
      <Accordion collapsible={false}>
        <Accordion.Item title='First item title'> First item content </Accordion.Item>
        <Accordion.Item title='Second item title'> Second item content </Accordion.Item>
        <Accordion.Item title='Third item title'> Third item content </Accordion.Item>
      </Accordion>
    );
  }
});

module.exports = SingleSelect;