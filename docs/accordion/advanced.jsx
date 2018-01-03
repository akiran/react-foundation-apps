var React = require('react');
var Accordion = require('../../src/accordion');

class MultiSelect extends React.Component {
  render() {
    return (
      <Accordion multiOpen={true} autoOpen={false} >
        <Accordion.Item title='First item title'> First item content </Accordion.Item>
        <Accordion.Item title='Second item title'> Second item content </Accordion.Item>
        <Accordion.Item title='Third item title'> Third item content </Accordion.Item>
      </Accordion>
    );
  }
}

module.exports = MultiSelect;