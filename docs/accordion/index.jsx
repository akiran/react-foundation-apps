var React = require('react');
var SingleSelect = require('./single-select');
var MultiSelect = require('./multi-select');
var Highlight = require('react-highlight');
var multiline = require('multiline');

var singleSnippet = multiline.stripIndent(function (){/*
<Accordion>
  <AccordionItem title='First item title'>
    First item content
  </AccordionItem>
  <AccordionItem title='Second item title'>
    Second item content
  </AccordionItem>
  <AccordionItem title='Third item title'>
    Third item content
  </AccordionItem>
</Accordion>
*/});

var multiSnippet = multiline.stripIndent(function (){/*
<Accordion multiOpen={true} autoOpen={false} >
  <AccordionItem title='First item title'>
    First item content
  </AccordionItem>
  <AccordionItem title='Second item title'>
    Second item content
  </AccordionItem>
  <AccordionItem title='Third item title'>
    Third item content
  </AccordionItem>
</Accordion>
*/});

var Accordion = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <h2>Accordion</h2>
        <h4 className='subheader'>
          Accordion allows you to create a collapsible content blocks
        </h4>
        <hr />
        <SingleSelect />
        <hr />
        <h3>Basic</h3>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight className='html'>
              {singleSnippet}
            </Highlight>
          </div>
          <div className='grid-content'>
            <SingleSelect />
          </div>
        </div>
        <hr />
        
        <h3>Advanced</h3>
        <div className='grid-block'>
          <div className='grid-content' >
            <Highlight className='html'>
              {multiSnippet}
            </Highlight>
          </div>
          <div className='grid-content'>
            <MultiSelect />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Accordion;