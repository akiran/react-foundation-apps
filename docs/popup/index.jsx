var React = require('react');
var BasicPopup = require('./basic');

var Popup = React.createClass({
  render: function () {
    return (
      <div>
        <BasicPopup />
      </div>
    );
  }
});

module.exports = Popup;