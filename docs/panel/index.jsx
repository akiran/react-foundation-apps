var React = require('react');
var Highlight = require('react-highlight');
var FixedPanel = require('./fixed-panel');
var Panel = require('../../lib/panel');
var Open = require('../../lib/triggers/open');
var Close = require('../../lib/triggers/close');
var HardToggle = require('../../lib/triggers/hard-toggle');

var PanelDocs = React.createClass({
  render: function () {
    return (
      <div>
        
        <h2>Panel</h2>
        <h4 className='subheader'>
          panel
        </h4> 
        <hr />
        <div className='grid-block'>
          <HardToggle trigger='example-top-panel'>
            <a className="button">Top Panel</a>
          </HardToggle>
          <HardToggle trigger='example-right-panel'>
            <a className="button">Right Panel</a>
          </HardToggle>
          <HardToggle trigger='example-bottom-panel'>
            <a className="button">Bottom Panel</a>
          </HardToggle>
          <HardToggle trigger='example-left-panel'>
            <a className="button">Left Panel</a>
          </HardToggle>
        </div>
        <hr />

        <h4>Basic Panel</h4>
        <p>Each panel should have unique id you can use to target it</p>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true}>
              {require('./basic.md')} 
            </Highlight>
          </div>
          <div className='grid-content'>
            <HardToggle trigger='example-left-panel'>
              <a className="button">Basic Panel</a>
            </HardToggle>
          </div>
        </div>
        <hr />

        <h4>Panel Trigger</h4>
        <p>You can trigger the panel by passing panel id to any trigger components like Open, Toggle, HardToggle, Close</p>
        <div className='grid-block'>
          <div className='grid-content'>
          </div>
          <div className='grid-content'>
            <HardToggle trigger='example-top-panel'>
              <a className="button">Top Panel</a>
            </HardToggle>
          </div>
        </div>
        <hr />

        <h4>Fixed Panel</h4>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true}>
              {require('./fixed-panel.md')}
            </Highlight>
          </div>
          <div className='grid-content'>
            <FixedPanel />
          </div>
        </div>
        <hr />

      </div>
    );
  }
});

module.exports = PanelDocs;