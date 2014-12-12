var React = require('react');
var Panel = require('../../lib/panel');
var Open = require('../../lib/open');
var Close = require('../../lib/close');

var FixedPa = React.createClass({
  render: function () {
    return (
      <div>
        <Open openId='fixed-panel'>
          <a className="button">Fixed Panel</a>
        </Open>
        <Panel id='fixed-panel' className='panel-fixed'>
          <Close closeId='fixed-panel'>
            <a className='close-button'>&times;</a>
          </Close>
          <p>Fixed Panel content</p>
        </Panel>
      </div>
    );
  }
});

module.exports = FixedPa;