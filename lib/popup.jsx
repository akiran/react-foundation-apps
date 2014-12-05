var React = require('react');
var cx = require('react/lib/cx');

var Popup = React.createClass({
  getDefaultProps: function () {
    return {
      pinTo: 'top center',
      footer: null,
      title: null
    };
  },
  render: function () {
    var classes = {
      popup: true,
      'is-active': this.props.active
    };
    return (
      <div className={cx(classes)}>
        <div className="panel panel-bottom">
          {this.props.footer}
        </div>
        <div className="title-bar">
          {this.props.title}
        </div>
        <div className="grid-content grid-block">
          {this.props.children}
        </div>
      </div>
    );
  },
});

module.exports = Popup;