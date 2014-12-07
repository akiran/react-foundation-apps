var React = require('react');
var Highlight = require('../react-highlight');
var LeftOffcanavas = require('./left');
var RightOffcanavas = require('./right');
var TopOffcanavas = require('./top');
var BottomOffcanavas = require('./bottom');
var topMD = require('./top.md');

var OffcanvasDocs = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Off-canvas</h2>
        <h4 className='subheader'>
          A container that is hidden off-screen and pushes its way in view when needed.
        </h4> 
        <hr />
        
        <div className='grid-block'>
          <TopOffcanavas />
          <RightOffcanavas />
          <BottomOffcanavas />
          <LeftOffcanavas />
        </div>
        <hr />

        <h4>Basic</h4>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight code={topMD} />
          </div>
          <div className='grid-content'>
            <TopOffcanavas />
          </div>
        </div>
        <hr />

      </div>
    );
  }
});

module.exports = OffcanvasDocs;