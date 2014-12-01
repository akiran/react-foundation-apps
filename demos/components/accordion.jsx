var React = require('react');
var AccordionSet = require('../../lib/accordion-set');
var Accordion = require('../../lib/accordion');

var Accordians = React.createClass({
  render: function () {
    return (
      <div>
        <AccordionSet>
          <Accordion title='First item'> First item content </Accordion>
          <Accordion title='Second item'> Second item content </Accordion>
          <Accordion title='Third item'> Third item content </Accordion>
        </AccordionSet>
      </div>
    );
  }
});

module.exports = Accordians;