var React = require('react');
var Panel = require('../../lib/panel');
var Trigger = require('../../lib/trigger');

var FixedPa = React.createClass({
  render: function () {
    return (
      <div>
        <Trigger open='fixed-panel'>
          <a className="button">Fixed Panel</a>
        </Trigger>
        <Panel id='fixed-panel' className='panel-fixed'>
          <Trigger close=''>
            <a className='close-button'>&times;</a>
          </Trigger>
          <p>Fixed Panel content</p>
        </Panel>
      </div>
    );
  }
});

module.exports = FixedPa;