var React = require('react');
var Offcanvas = require('../../lib/offcanvas');
var Open = require('../../lib/open');
var Close = require('../../lib/close');
var Toggle = require('../../lib/toggle');

var Offcanvass = React.createClass({
  render: function () {
    return (
      <div className='grid-block' style={{'align-items': 'center'}}>
        <div className='grid-block' style={{'align-items': 'center'}}>
          <div className='grid-block align-center'>
            <Toggle data-id="l-offcanvas"><button>Left Offcanvas</button></Toggle>
            <Toggle data-id="r-offcanvas"><button>Right Offcanvas</button></Toggle>
            <Toggle data-id="t-offcanvas"><button>Top Offcanvas</button></Toggle>
            <Toggle data-id="b-offcanvas"><button>Bottom Offcanvas</button></Toggle>
          </div>
          <Offcanvas id="l-offcanvas">
            <div className='grid-block align-center'>Offcanvas content</div>
          </Offcanvas>
          <Offcanvas id="r-offcanvas" position='right'>
            <div className='grid-block align-center'>Offcanvas content</div>
          </Offcanvas>
          <Offcanvas id="t-offcanvas" position='top'>
            <div className='grid-block align-center'>Offcanvas content</div>
          </Offcanvas>
          <Offcanvas id="b-offcanvas" position='bottom'>
            <div className='grid-block align-center'>Offcanvas content</div>
          </Offcanvas>
        </div>
      </div>
    );
  }
});

module.exports = Offcanvass;