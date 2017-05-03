var React = require('react');
var cx = require('classnames');

var Tab = React.createClass({
  displayName: 'Tab',

  componentDidMount: function () {
    if (this.props.active) {
      this.select();
    }
  },
  select: function () {
    var options = {
      selectedTab: this.props.index,
      content: this.props.children
    };
    this.props.selectTab(options);
  },
  render: function () {
    var classes = {
      'tab-item': true,
      'is-active': this.props.active
    };
    return React.createElement(
      'div',
      { className: cx(classes), onClick: this.select },
      this.props.title
    );
  }
});

module.exports = Tab;