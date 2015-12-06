var React = require('react');

var Notification = React.createClass({
  getDefaultProps: function () {
    return {
      position: 'top-right',
      color: 'success',
      title: null,
      image: null,
      content: null,
      wrapperElement: "p"
    };
  },
  render: function () {
    var classes = 'notification ' + this.props.position + ' ' + this.props.color;
    classes +=  ' ' + (this.props.className || '');
    var imageNode = null;
    if (this.props.image) {
      imageNode = (
        <div className="notification-icon">
          <img src="{{ image }}" />
        </div>
      );
    }
    return (
      <div id={this.props.id} data-closable={true} className={classes}>
        <a href="#" className="close-button" onClick={this.props.closeHandler}>&times;</a>
        {imageNode}
        <div className="notification-content">
          <h1>{this.props.title}</h1>
          {React.createElement(this.props.wrapperElement, null, this.props.children)}
        </div>
      </div>
    );
  }
});

module.exports = Notification;