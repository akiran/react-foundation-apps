var React = require('react');
var cx = require('react/lib/cx');

var Tab = React.createClass({
  render: function () {
    var classes = {
      'tab-item': true,
      'is-active': this.props.active
    };
    var options = {
      selectedTab: this.props.index,
      content: this.props.children
    };
    return (
      <div className={cx(classes)} onClick={this.props.selectTab(options)}>
        {this.props.title}
      </div>
    );
  }
});

module.exports = Tab;
