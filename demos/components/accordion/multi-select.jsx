var React = require('react');
var Accordion = require('../../../lib/accordion');
var AccordionItem = require('../../../lib/accordion-item');

var MultiSelect = React.createClass({
  render: function () {
    return (
      <Accordion multiOpen={true} autoOpen={false} >
        <AccordionItem title='First item title'> First item content </AccordionItem>
        <AccordionItem title='Second item title'> Second item content </AccordionItem>
        <AccordionItem title='Third item title'> Third item content </AccordionItem>
      </Accordion>
    );
  }
});

module.exports = MultiSelect;