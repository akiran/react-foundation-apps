var React = require('react');
var SingleSelect = require('./single-select');
var MultiSelect = require('./multi-select');
var Highlight = require('../react-highlight');
var singleMD = require('./single-select.md');
var multiMD = require('./multi-select.md');
var usageMD = require('./usage.md');

var Accordion = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <Highlight code={usageMD}/>
        <hr />
        <SingleSelect />
        <hr />
        <h3>Basic</h3>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight code={singleMD}/>
          </div>
          <div className='grid-content'>
            <SingleSelect />
          </div>
        </div>
        <hr />
        
        <h3>Advanced</h3>
        <div className='grid-block'>
          <div className='grid-content' >
            <Highlight code={multiMD}/>
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