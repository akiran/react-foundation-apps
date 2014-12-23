var React = require('react');
var cx = require('react/lib/cx');
var foundationApi = require('../utils/foundation-api');

var Popup = React.createClass({
  getInitialState: function () {
    return { active: false };
  },
  getDefaultProps: function () {
    return {
      pinTo: 'top center',
      pinAt:''
    };
  },
  componentDidMount: function () {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      console.log(name, msg);
      if (msg === 'popup-toggle') {
        this.setState({active: !this.state.active});
      }
    }.bind(this));
  },
  render: function () {
    console.log(this.state.active);
    var classes = {
      popup: true,
      'is-active': this.state.active
    };
    return (
      <div id={this.props.id} className={cx(classes)} data-closable='popup'>
        {this.props.children}
      </div>
    );
  },
});

module.exports = Popup;