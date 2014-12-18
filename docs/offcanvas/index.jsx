var React = require('react');
var Highlight = require('react-highlight');
var Open = require('../../lib/triggers/open');
var HardToggle = require('../../lib/triggers/hard-toggle');
// var LeftOffcanavas = require('./left');
// var RightOffcanavas = require('./right');
// var TopOffcanavas = require('./top');
// var BottomOffcanavas = require('./bottom');

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
          <HardToggle trigger='top-offcanvas'>
            <a className='button'>Top Off-canvas</a>
          </HardToggle>
          <HardToggle trigger='right-offcanvas'>
            <a className='button'>Right Off-canvas</a>
          </HardToggle>
          <HardToggle trigger='bottom-offcanvas'>
            <a className='button'>Bottom Off-canvas</a>
          </HardToggle>
          <HardToggle trigger='left-offcanvas'>
            <a className='button'>Left Off-canvas</a>
          </HardToggle>
        </div>
        <hr />

        <h4>Basic</h4>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true}>
              {require('./top.md')}
            </Highlight>
          </div>
          <div className='grid-content'>
            <HardToggle trigger='top-offcanvas'>
              <a className='button'>Top Off-canvas</a>
            </HardToggle>
          </div>
        </div>
        <hr />
        
      </div>
    );
  }
});

module.exports = OffcanvasDocs;