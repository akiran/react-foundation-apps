'use strict';

var React = require('react');

var Tabs = React.createClass({
  displayName: 'Tabs',

  getInitialState: function getInitialState() {
    return {
      selectedTab: 0,
      content: null
    };
  },
  selectTab: function selectTab(options) {
    this.setState(options);
  },
  render: function render() {
    var children = React.Children.map(this.props.children, (function (child, index) {
      return React.cloneElement(child, {
        active: index === this.state.selectedTab,
        index: index,
        selectTab: this.selectTab
      });
    }).bind(this));
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'tabs' },
        children
      ),
      React.createElement(
        'div',
        null,
        this.state.content
      )
    );
  }
});

module.exports = Tabs;
Tabs.Tab = require('./tab');