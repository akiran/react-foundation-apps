'use strict';

var React = require('react');
var cx = require('classnames');

var AccordionItem = React.createClass({
  displayName: 'AccordionItem',

  render: function render() {
    var itemClasses = {
      'accordion-item': true,
      'is-active': this.props.active
    };
    return React.createElement(
      'div',
      { className: cx(itemClasses) },
      React.createElement(
        'div',
        { className: 'accordion-title', onClick: this.props.activate },
        this.props.title
      ),
      React.createElement(
        'div',
        { className: 'accordion-content' },
        this.props.children
      )
    );
  }
});

module.exports = AccordionItem;