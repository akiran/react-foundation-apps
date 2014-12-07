var React = require('react');
var cx = require('react/lib/cx');
var foundationApi = require('./utils/foundation-api');
var PubSub = require('pubsub-js');
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var NotificationStatic = React.createClass({
  getInitialState: function () {
    return { open: false };
  },
  getDefaultProps: function () {
    return {
      position: 'top-right',
      color: 'success',
      title: null,
      image: null,
      content: null
    };
  },
  componentDidMount: function () {
    PubSub.subscribe(this.props.id, function (msg, data) {
      if (data === 'open') {
        this.setState({open: true});
      }
    }.bind(this)); 
  },
  closeHandler: function (e) {
    this.setState({open: false});
    e.preventDefault();
    e.stopPropagation();
  },
  render: function () {
    var classes = { 
      notification: true,
      'is-active': this.state.open
    };
    classes[this.props.position] = true;
    classes[this.props.color] = true;
    var imageNode = null;
    var notification = null;
    if (this.props.image) {
      imageNode = (
        <div className="notification-icon" ng-if="image">
          <img src="{{ image }}" />
        </div>
      );
    }
    if (this.state.open) {
      notification = (
        <div>
          <a href="#" className="close-button" onClick={this.closeHandler}>&times;</a>
          {imageNode}
          <div className="notification-content">
            <h1>{this.props.title}</h1>
            <p>{this.props.children}</p>
          </div>
        </div>
      );
    }
    return (
      <div className={cx(classes)}>
        {notification}
      </div>
    );
  }
});

module.exports = NotificationStatic;