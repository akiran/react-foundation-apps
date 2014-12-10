var React = require('react');
var Animation = require('react-animation');

var Playground = React.createClass({
  getInitialState: function () {
    return {show: true};
  },
  toggle: function () {
    console.log(this.state.show);
    this.setState({show: !this.state.show});
  },
  render: function () {
    var node = null;
    // if (this.state.show) {
      node = <div key={this.state.show}> Some Text</div>;
    // }
    AnimationClasses = {
      enter: "fadeIn ng-enter",
      enterActive: "ng-enter-active",
      leave: "fadeOut ng-leave",
      leaveActive: "ng-leave-active"
    };
    return (
      <div>
        <a className="button" onClick={this.toggle}>Toggle</a>
        <hr />
        <Animation transitionName={AnimationClasses}>
          {node}
        </Animation>
      </div>
    );
  }
});

module.exports = Playground;