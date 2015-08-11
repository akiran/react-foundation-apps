var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');

var Tabs = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 0
    };
  },
  selectTab: function (options) {
    this.setState(options);
  },
  render: function () {
    var content = null;
    var children = React.Children.map(this.props.children, function (child, index) {
      if(index === this.state.selectedTab) content = child.props.children;
      return cloneWithProps(child, {
        active: (index === this.state.selectedTab),
        index: index,
        selectTab: this.selectTab
      });
    }.bind(this));
    return (
      <div>
        <div className='tabs'>{children}</div>
        <div className='content'>{content}</div>
      </div>
    );
  }
});

module.exports = Tabs;
Tabs.Tab = require('./tab');
