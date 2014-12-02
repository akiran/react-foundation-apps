var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');

var Tabs = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: null,
      content: null
    };
  },
  selectTab: function (options) {
    return function () {
      this.setState(options);
    }.bind(this);
  },
  render: function () {
    var children = React.Children.map(this.props.children, function (child, index) {
      return cloneWithProps(child, {
        active: (index === this.state.selectedTab),
        index: index,
        selectTab: this.selectTab
      });
    }.bind(this));
    return (
      <div>
        <div className='tabs'>{children}</div>
        <div>{this.state.content}</div>
      </div>
    );
  }
});

module.exports = Tabs;