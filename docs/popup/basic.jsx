var React = require('react');
var Popup = require('../../src/popup');
var Trigger = require('../../src/trigger');

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