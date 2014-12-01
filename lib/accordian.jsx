var React = require('react');
var cx = require('react/lib/cx');

var Accordian = React.createClass({
  render: function () {
    var itemClasses = {
      'accordian-item': true,
      'is-active': this.props.active
    };
    return (
      <div className={cx(itemClasses)}>
        <div className='accordian-title' conClick={this.props.activate}>
          {this.props.title}
        </div>
        <div className='accordian-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Accordian;