'use strict';

var React = require('react');
var cx = require('classnames');

var ActionSheetContent = React.createClass({
  displayName: 'ActionSheetContent',

  getDefaultProps: function getDefaultProps() {
    return { position: 'bottom' };
  },
  render: function render() {
    var classes = {
      'action-sheet': true,
      'is-active': this.props.active
    };
    return React.createElement(
      'div',
      { className: cx(classes) },
      this.props.children
    );
  }
});

module.exports = ActionSheetContent;