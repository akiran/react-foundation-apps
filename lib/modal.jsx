var React = require('react');
var PubSub = require('pubsub-js');
var LayerMixin = require('./mixins/layer');

var Modal = React.createClass({
  mixins: [LayerMixin],
  getInitialState: function () {
    return {
      open: false
    };
  },
  componentDidMount: function () {
    PubSub.subscribe(this.props.id, function (msg, data) {
      if (data === 'open') {
        this.setState({open: true});
      } else if (data === 'close') {
        this.setState({open: false});
      } else if (data === 'toggle') {
        this.setState({open: !this.state.open});
      }
    }.bind(this));
  },
  renderLayer: function() {
    if (this.state.open) {
      return (
        <div className='modal-overlay is-active'>
          <div className='modal vertical grid-block is-active'>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  },
  render: function () {
    return null;
  }
});

module.exports = Modal;