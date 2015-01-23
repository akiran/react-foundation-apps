var React = require('react');
var BasicPopup = require('./basic');
var Highlight = require('react-highlight/optimized');

var Popup = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Popup</h2>
        <h4 className='subheader'>Show or hide content by clicking on an element</h4>
        <hr />
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true} languages={['xml']} >
              {require('./basic.md')}
            </Highlight>
          </div>
          <div className='grid-content'>
            <BasicPopup />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Popup;