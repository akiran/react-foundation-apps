var React = require('react');
var Popup = require('../../lib/popup');
var PopupToggle = require('../../lib/popup-toggle');

var PopupDemos = React.createClass({
  render: function () {
    var popup = <Popup>Some content</Popup>;
    return (
      <div>
        <PopupToggle popup={popup}>
          <a>Popup</a>
        </PopupToggle>
      </div>
    );
  }
});

module.exports = PopupDemos;