var React = require('react');
var Highlight = require('../react-highlight');
var FixedPanel = require('./fixed-panel');
var Panel = require('../../lib/panel');
var Open = require('../../lib/open');
var Close = require('../../lib/close');
var fixedMD = require('./fixed-panel.md');
var basicMD = require('./basic.md');

var PanelDocs = React.createClass({
  render: function () {
    return (
      <div>
        <Panel id='example-top-panel' position='top'>
          <Close closeId='example-top-panel'>
            <a className='close-button'>&times;</a>
          </Close>
          Top Panel content
        </Panel> 
        <Panel id='example-right-panel' position='right'>
          <Close closeId='example-right-panel'>
            <a className='close-button'>&times;</a>
          </Close>
          Right Panel content
        </Panel> 
        <Panel id='example-bottom-panel' position='bottom'>
          <Close closeId='example-bottom-panel'>
            <a className='close-button'>&times;</a>
          </Close>
          Bottom Panel content
        </Panel> 
        <Panel id='example-left-panel'>
          <Close closeId='example-left-panel'>
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
          <Open openId='example-top-panel'>
            <a className="button">Top Panel</a>
          </Open>
          <Open openId='example-right-panel'>
            <a className="button">Right Panel</a>
          </Open>
          <Open openId='example-bottom-panel'>
            <a className="button">Bottom Panel</a>
          </Open>
          <Open openId='example-left-panel'>
            <a className="button">Left Panel</a>
          </Open>
        </div>
        <hr />

        <h4>Basic Panel</h4>
        <p>Each panel should have unique id you can use to target it</p>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight code={basicMD} />
          </div>
          <div className='grid-content'>
            <Open openId='example-left-panel'>
              <a className="button">Basic Panel</a>
            </Open>
          </div>
        </div>
        <hr />

        <h4>Panel Trigger</h4>
        <p>You can trigger the panel by passing panel id to Open component</p>
        <div className='grid-block'>
          <div className='grid-content'>
          </div>
          <div className='grid-content'>
            <Open openId='example-top-panel'>
              <a className="button">Top Panel</a>
            </Open>
          </div>
        </div>
        <hr />

        <h4>Fixed Panel</h4>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight code={fixedMD} />
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