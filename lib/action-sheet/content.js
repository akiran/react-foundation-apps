var React = require('react');
var cx = require('classnames');

var ActionSheetContent = React.createClass({
  displayName: 'ActionSheetContent',

  getDefaultProps: function () {
    return { position: 'bottom' };
  },
  render: function () {
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