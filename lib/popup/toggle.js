'use strict';

var React = require('react');
var foundationApi = require('../utils/foundation-api');

var PopupToggle = React.createClass({
  displayName: 'PopupToggle',

  clickHandler: function clickHandler(id, e) {
    e.preventDefault();
    foundationApi.publish(this.props.popupToggle, ['toggle', id]);
  },
  render: function render() {
    var child = React.Children.only(this.props.children);
    var id = this.props.id || foundationApi.generateUuid();
    return React.cloneElement(child, {
      id: id,
      onClick: this.clickHandler.bind(this, id)
    });
  }
});

module.exports = PopupToggle;