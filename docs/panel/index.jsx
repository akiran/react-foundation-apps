var React = require('react');
var Highlight = require('../react-highlight');
var FixedPanel = require('./fixed-panel');
var Panel = require('../../lib/panel');
var Open = require('../../lib/open');
var Close = require('../../lib/close');
var HardToggle = require('../../lib/hard-toggle');

var PanelDocs = React.createClass({
  render: function () {
    return (
      <div>
        <Panel id='example-top-panel' position='top'>
          <Close trigger='example-top-panel'>
            <a className='close-button'>&times;</a>
          </Close>
          Top Panel content
        </Panel> 
        <Panel id='example-right-panel' position='right'>
          <Close trigger='example-right-panel'>
            <a className='close-button'>&times;</a>
          </Close>
          Right Panel content
        </Panel> 
        <Panel id='example-bottom-panel' position='bottom'>
          <Close trigger='example-bottom-panel'>
            <a className='close-button'>&times;</a>
          </Close>
          Bottom Panel content
        </Panel> 
        <Panel id='example-left-panel'>
          <Close trigger='example-left-panel'>
            <a className='close-button'>&times;</a>
          </Close>
          Basic Left Panel content
        </Panel> 

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
            <Highlight code={require('./basic.md')} />
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
            <Highlight code={require('./fixed-panel.md')} />
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