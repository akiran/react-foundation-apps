var React = require('react');
var Highlight = require('../react-highlight');
var SimpleModal = require('./simple');
var AdvancedModal = require('./advanced');
var simpleMD = require('./simple.md');
var advancedMD = require('./advanced.md');

var ModalDocs = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <h2>Modal</h2>
        <h4 className='subheader'>
          Modal allows you to create dialogs or pop-up windows that focuses the user on the content.
        </h4>
        <hr />
        <AdvancedModal />
        <hr />

        <h3>Basic</h3>
        <div className='grid-block'>
          <div className='small-8 grid-content'>
            <Highlight code={simpleMD}/>
          </div>
          <div className='grid-content'>
            <SimpleModal />
          </div>
        </div>
        <hr />

        <h3>Advanced</h3>
        <div className='grid-block'>
          <div className='small-8 grid-content'>
            <Highlight code={advancedMD}/>
          </div>
          <div className='grid-content'>
            <AdvancedModal />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ModalDocs;