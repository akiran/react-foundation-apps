var React = require('react');
var Highlight = require('react-highlight/optimized');
var SimpleModal = require('./simple');
var AdvancedModal = require('./advanced');

var ModalDocs = React.createClass({
  render: function () {
    return (
      <div className='grid-content'>
        <h2>Modal</h2>
        <h4 className='subheader'>
          Modal allows you to create dialogs or pop-up windows that focuses the user on the content.
        </h4>
        <hr />
        <h3>Basic</h3>
        <div className='grid-block'>
          <div className='small-8 grid-content'>
            <Highlight innerHTML={true} languages={['xml']}>
             {require('./simple.md')}
             </Highlight>
          </div>
          <div className='grid-content'>
            <SimpleModal />
          </div>
        </div>
        <hr />

        <h3>Advanced</h3>
        <div className='grid-block'>
          <div className='small-8 grid-content'>
            <Highlight innerHTML={true} languages={['xml']}>
             {require('./advanced.md')}
            </Highlight>
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