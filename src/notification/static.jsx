var React = require('react');
var classnames = require('classnames');
var foundationApi = require('../utils/foundation-api');
var Animation = require('../utils/animation');
var Notification = require('./notification');

var NotificationStatic = React.createClass({
  getInitialState: function () {
    return { open: false };
  },
  componentDidMount: function () {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'open') {
        this.setState({open: true});
      } else if (msg === 'close') {
        this.setState({open: false});
      }
    }.bind(this)); 
  },
  componentWillUnmount: function () {
    foundationApi.unsubscribe(this.props.id);
  },
  closeHandler: function (e) {
    this.setState({open: false});
    e.preventDefault();
    e.stopPropagation();
  },
  render: function () {
    return (
      <Animation active={this.state.open} animationIn="fadeIn" animationOut="fadeOut">
        <Notification {...this.props} closeHandler={this.closeHandler} >
          {this.props.children}
        </Notification>
      </Animation>
    );
  }
});

module.exports = NotificationStatic;