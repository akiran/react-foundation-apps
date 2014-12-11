var React = require('react');
var Animation = require('../../lib/animation');

var Playground = React.createClass({
  getInitialState: function () {
    return {show: true};
  },
  toggle: function () {
    this.setState({show: !this.state.show});
  },
  render: function () {
    return (
      <div>
        <a className="button" onClick={this.toggle}>Toggle</a>
        <hr />
        <Animation active={this.state.show} animationIn="fadeIn" animationOut="fadeOut" >
          <div>Some Text</div>
        </Animation>
      </div>
    );
  }
});

module.exports = Playground;