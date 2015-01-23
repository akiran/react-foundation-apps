var React = require('react');
var BasicAccordion = require('./basic');
var AdvancedAccordion = require('./advanced');
var Highlight = require('react-highlight/optimized');

var Accordion = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <h2>Accordion</h2>
        <h4 className='subheader'>
          Accordion allows you to create a collapsible content blocks
        </h4>
        <hr />
        <BasicAccordion />
        <hr />
        <h3>Basic</h3>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true} languages={['xml']}>
              {require('./basic.md')}
            </Highlight>
          </div>
          <div className='grid-content'>
            <BasicAccordion />
          </div>
        </div>
        <hr />
        
        <h3>Advanced</h3>
        <div className='grid-block'>
          <div className='grid-content' >
            <Highlight innerHTML={true} languages={['xml']}>
              {require('./advanced.md')}
            </Highlight>
          </div>
          <div className='grid-content'>
            <AdvancedAccordion />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Accordion;