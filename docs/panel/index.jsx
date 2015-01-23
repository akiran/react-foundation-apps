var React = require('react');
var Highlight = require('react-highlight/optimized');
var FixedPanel = require('./fixed-panel');
var Panel = require('../../lib/panel');
var Trigger = require('../../lib/trigger');

var PanelDocs = React.createClass({
  render: function () {
    return (
      <div>
        <Panel id='example-top-panel' position='top'>
          <Trigger close=''>
            <a className='close-button'>&times;</a>
          </Trigger>
          Top Panel content
        </Panel> 
        <Panel id='example-right-panel' position='right'>
          <Trigger close=''>
            <a className='close-button'>&times;</a>
          </Trigger>
          Right Panel content
        </Panel> 
        <Panel id='example-bottom-panel' position='bottom'>
          <Trigger close=''>
            <a className='close-button'>&times;</a>
          </Trigger>
          Bottom Panel content
        </Panel> 
        <Panel id='example-left-panel'>
          <Trigger close=''>
            <a className='close-button'>&times;</a>
          </Trigger>
          Basic Left Panel content
        </Panel> 
        <h2>Panel</h2>
        <h4 className='subheader'>
          panel
        </h4> 
        <hr />
        <div className='grid-block'>
          <Trigger hardToggle='example-top-panel'>
            <a className="button">Top Panel</a>
          </Trigger>
          <Trigger hardToggle='example-right-panel'>
            <a className="button">Right Panel</a>
          </Trigger>
          <Trigger hardToggle='example-bottom-panel'>
            <a className="button">Bottom Panel</a>
          </Trigger>
          <Trigger hardToggle='example-left-panel'>
            <a className="button">Left Panel</a>
          </Trigger>
        </div>
        <hr />

        <h4>Basic Panel</h4>
        <p>Each panel should have unique id you can use to target it</p>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true} languages={['xml']}>
              {require('./basic.md')} 
            </Highlight>
          </div>
          <div className='grid-content'>
            <Trigger hardToggle='example-left-panel'>
              <a className="button">Basic Panel</a>
            </Trigger>
          </div>
        </div>
        <hr />

        <h4>Panel Trigger</h4>
        <p>Place the markup for panel component inside the block where panel should be revealed. You can trigger the panel with actions such as open, toggle, hardToggle using Trigger component</p>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true} languages={['xml']}>
              {require('./trigger.md')} 
            </Highlight>
          </div>
          <div className='grid-content'>
            <Trigger hardToggle='example-top-panel'>
              <a className="button">Top Panel</a>
            </Trigger>
          </div>
        </div>
        <hr />

        <h4>Fixed Panel</h4>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true} languages={['xml']}>
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