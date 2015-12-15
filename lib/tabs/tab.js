'use strict';

var React = require('react');
var cx = require('classnames');

var Tab = React.createClass({
  displayName: 'Tab',

  componentDidMount: function componentDidMount() {
    if (this.props.active) {
      this.select();
    }
  },
  select: function select() {
    var options = {
      selectedTab: this.props.index,
      content: this.props.children
    };
    this.props.selectTab(options);
  },
  render: function render() {
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