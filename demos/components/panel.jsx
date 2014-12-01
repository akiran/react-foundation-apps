var React = require('react');
var Panel = require('../../lib/panel');
var Open = require('../../lib/open');
var Close = require('../../lib/close');
var Toggle = require('../../lib/toggle');

var Panels = React.createClass({
  render: function () {
    return (
      <div className='grid-block collapse'>
        <div className='grid-block'>
          <Toggle data-id="l-panel"><button>Left Panel</button></Toggle>
          <Toggle data-id="r-panel"><button>Right Panel</button></Toggle>
          <Toggle data-id="t-panel"><button>Top Panel</button></Toggle>
          <Toggle data-id="b-panel"><button>Bottom Panel</button></Toggle>
        </div>
        <Panel id="l-panel">
          <div className='grid-block align-center'>Panel content</div>
        </Panel>
        <Panel id="r-panel" position='right'>
          <div className='grid-block align-center'>Panel content</div>
        </Panel>
        <Panel id="t-panel" position='top'>
          <div className='grid-block align-center'>Panel content</div>
        </Panel>
        <Panel id="b-panel" position='bottom'>
          <div className='grid-block align-center'>Panel content</div>
        </Panel>
      </div>
    );
  }
});

module.exports = Panels;