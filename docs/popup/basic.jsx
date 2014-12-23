var React = require('react');
var Popup = require('../../lib/popup');
var Trigger = require('../../lib/trigger');

var BasicPopup = React.createClass({
  render: function () {
    return (
      <div>
        <Trigger popupToggle='basic-popup'>
          <a className='button'>popup</a>
        </Trigger>
        <Popup id='basic-popup'>
          <p>some popup content</p>
        </Popup>
      </div>
    );
  }
});

module.exports = BasicPopup;