var React = require('react');
var cx = require('react/lib/cx');

var Tab = React.createClass({

  select: function () {
    var options = {
      selectedTab: this.props.index
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
