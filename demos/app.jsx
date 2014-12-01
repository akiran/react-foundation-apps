var devServer = require('webpack/hot/only-dev-server');
var React = require('react');
var Header = require('./header');
require('./scss/app.scss');
var Modal = require('./components/modal');
var Panel = require('./components/panel');
var Offcanvas = require('./components/offcanvas');
var Accordion = require('./components/accordion');

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
    } if (this.state.component === 'offcanvas') {
      componentDemo = <Offcanvas />;
    } if (this.state.component === 'accordion') {
      componentDemo = <Accordion />;
    }
    return (
      <div className='grid-frame vertical'>
        <Header />
        <div className='grid-block'>
          <div className='small-2 grid-block sidebar'>
            <div className='vertical grid-block'>
              <section>
                <ul className='menu-bar vertical'>
                  <li><a onClick={this.selectComponent.bind(this, 'modal')}>Modal</a></li>
                  <li><a onClick={this.selectComponent.bind(this, 'panel')}>Panel</a></li>
                  <li><a onClick={this.selectComponent.bind(this, 'offcanvas')}>Offcanvas</a></li>
                  <li><a onClick={this.selectComponent.bind(this, 'accordion')}>Accordion</a></li>
                </ul>
              </section>
            </div>
          </div>
          <div className='grid-content'>
            {componentDemo}
          </div>
        </div>
      </div>
    );
  }
});

React.render(<Demos />, document.body);;