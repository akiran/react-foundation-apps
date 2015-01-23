var React = require('react');
var Highlight = require('react-highlight/optimized');
var Trigger = require('../../lib/trigger');

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
          <Trigger hardToggle='top-offcanvas'>
            <a className='button'>Top Off-canvas</a>
          </Trigger>
          <Trigger hardToggle='right-offcanvas'>
            <a className='button'>Right Off-canvas</a>
          </Trigger>
          <Trigger hardToggle='bottom-offcanvas'>
            <a className='button'>Bottom Off-canvas</a>
          </Trigger>
          <Trigger hardToggle='left-offcanvas'>
            <a className='button'>Left Off-canvas</a>
          </Trigger>
        </div>
        <hr />

        <h4>Basic</h4>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true} languages={['xml']}>
              {require('./top.md')}
            </Highlight>
          </div>
          <div className='grid-content'>
            <Trigger hardToggle='top-offcanvas'>
              <a className='button'>Top Off-canvas</a>
            </Trigger>
          </div>
        </div>
        <hr />
        
      </div>
    );
  }
});

module.exports = OffcanvasDocs;