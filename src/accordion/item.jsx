var React = require('react');
var classnames = require('classnames');

var AccordionItem = React.createClass({
  render: function () {
    var itemClasses = {
      'accordion-item': true,
      'is-active': this.props.active
    };
    return (
      <div className={classnames(itemClasses)}>
        <div className='accordion-title' onClick={this.props.activate}>
          {this.props.title}
        </div>
        <div className='accordion-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = AccordionItem;