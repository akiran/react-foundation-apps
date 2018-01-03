var React = require('react');
var Popup = require('../../src/popup');
var Trigger = require('../../src/trigger');

class BasicPopup extends React.Component {
  render() {
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
}

module.exports = BasicPopup;