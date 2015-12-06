var React = require('react');
var classnames = require('classnames');

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
      <div className={classnames(classes)} onClick={this.select}>
        {this.props.title}
      </div>
    );
  }
});

module.exports = Tab;
