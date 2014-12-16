var React = require('react');
var SingleSelect = require('./single-select');
var MultiSelect = require('./multi-select');
var Highlight = require('../react-highlight');

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
            <Highlight code={require('./single-select.md')}/>
          </div>
          <div className='grid-content'>
            <SingleSelect />
          </div>
        </div>
        <hr />
        
        <h3>Advanced</h3>
        <div className='grid-block'>
          <div className='grid-content' >
            <Highlight code={require('./multi-select.md')}/>
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