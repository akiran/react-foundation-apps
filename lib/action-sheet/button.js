'use strict';

var React = require('react');

var ActionSheetButton = React.createClass({
  displayName: 'ActionSheetButton',

  toggle: function toggle() {
    this.props.setActiveState(!this.props.active);
  },
  render: function render() {
    var Title = null;
    if (this.props.title.length > 0) {
      Title = React.createElement(
        'a',
        { className: 'button' },
        this.props.title
      );
    }
    return React.createElement(
      'div',
      { onClick: this.toggle },
      Title,
      React.createElement(
        'div',
        null,
        this.props.children
      )
    );
  }
});

module.exports = ActionSheetButton;