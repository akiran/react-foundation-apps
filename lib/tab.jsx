var React = require('react');
var cx = require('react/lib/cx');

var Tab = React.createClass({
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
    return (
      <div className={cx(classes)} onClick={this.select}>
        {this.props.title}
      </div>
    );
  }
});

module.exports = Tab;
