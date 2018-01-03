var React = require('react');
var cx = require('classnames');

var ActionSheetContent = React.createClass({
  getDefaultProps: function () {
    return {position: 'bottom'};
  },
  render: function () {
    var classes = {
      'action-sheet': true,
      'is-active': this.props.active
    };
    return (
      <div className={cx(classes)}>{this.props.children}</div>
    );
  }
});

module.exports = ActionSheetContent;
