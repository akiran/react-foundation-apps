var React = require('react');
var SingleSelect = require('./single-select');
var MultiSelect = require('./multi-select');
var Highlight = require('../react-highlight');
var singleHTML = require('./single-select.html');
var multiHTML = require('./multi-select.html');

var Accordion = React.createClass({
  render: function () {
    return (
      <div className='vertical grid-block'>
        <div className='grid-block shrink'>
          <div className='grid-content'>
            <h3>Basic</h3>
          </div>
        </div>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight code={singleHTML}/>
          </div>
          <div className='grid-content'>
            <SingleSelect />
          </div>
        </div>
        <div className='grid-block shrink'>
          <div className='grid-content'>
            <h3>Advanced</h3>
          </div>
        </div>
        <div className='grid-block'>
          <div className='grid-content' >
            <Highlight code={multiHTML}/>
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