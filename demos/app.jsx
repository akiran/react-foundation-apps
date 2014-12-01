var devServer = require('webpack/hot/only-dev-server');
var React = require('react');
require('./scss/app.scss');
var Modal = require('./components/modal');
var Panel =require('./components/panel');

var Demos = React.createClass({
  getInitialState: function () {
    return {component: 'modal'};
  },
  selectComponent: function (component) {
    this.setState({component: component});
  },
  render: function () {
    var componentDemo;
    if (this.state.component === 'modal') {
      componentDemo = <Modal />;
    } if (this.state.component === 'panel') {
      componentDemo = <Panel />;
    }
    return (
      <div className='grid-frame'>
        <div className='small-2 grid-block sidebar'>
          <div className='vertical grid-block'>
            <section>
              <ul className='menu-bar vertical'>
                <li><a onClick={this.selectComponent.bind(this, 'modal')}>Modal</a></li>
                <li><a onClick={this.selectComponent.bind(this, 'panel')}>Panel</a></li>
              </ul>
            </section>
          </div>
        </div>
        <div className='grid-content'>
          {componentDemo}
        </div>
      </div>
    );
  }
});

React.render(<Demos />, document.body);;