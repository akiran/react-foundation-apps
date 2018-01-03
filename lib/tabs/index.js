var React = require('react');

var Tabs = React.createClass({
  displayName: 'Tabs',

  getInitialState: function () {
    return {
      selectedTab: 0,
      content: null
    };
  },
  selectTab: function (options) {
    this.setState(options);
  },
  render: function () {
    var children = React.Children.map(this.props.children, function (child, index) {
      return React.cloneElement(child, {
        active: index === this.state.selectedTab,
        index: index,
        selectTab: this.selectTab
      });
    }.bind(this));
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