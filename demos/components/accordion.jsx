var React = require('react');
var Accordion = require('../../lib/accordion');
var AccordionItem = require('../../lib/accordion-item');

var Accordians = React.createClass({
  render: function () {
    return (
      <div>
        <h3> Select one item</h3>
        <Accordion>
          <AccordionItem title='First item'> First item content </AccordionItem>
          <AccordionItem title='Second item'> Second item content </AccordionItem>
          <AccordionItem title='Third item'> Third item content </AccordionItem>
        </Accordion>
        <h3> Select multiple item</h3>
        <Accordion multiOpen={true}>
          <AccordionItem title='First item'> First item content </AccordionItem>
          <AccordionItem title='Second item'> Second item content </AccordionItem>
          <AccordionItem title='Third item'> Third item content </AccordionItem>
        </Accordion>
      </div>
    );
  }
});

module.exports = Accordians;