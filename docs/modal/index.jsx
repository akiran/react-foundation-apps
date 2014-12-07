var React = require('react');
var Highlight = require('../react-highlight');
var SimpleModal = require('./simple');
var AdvancedModal = require('./advanced');
var usageMD = require('./usage.md');
var simpleMD = require('./simple.md');
var advancedMD = require('./advanced.md');

var ModalDocs = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <Highlight code={usageMD} />
        <hr />
        <AdvancedModal />
        <hr />

        <h3>Basic</h3>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight code={simpleMD}/>
          </div>
          <div className='grid-content'>
            <SimpleModal />
          </div>
        </div>
        <hr />

        <h3>Advanced</h3>
        <div className='grid-block'>
          <div className='grid-content'>
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