var React = require('react');
var BasicIconic = require('./basic');
var Highlight = require('react-highlight/optimized');

var IconicDocs = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Iconic</h2>
        <hr />

        <h3>Basic</h3> 
        <div className='grid-block'>
          <div className='small-8 grid-content'>
            <Highlight innerHTML={true} languages={['xml']}>
              {require('./basic.md')}
            </Highlight>
          </div>
          <div className='grid-content'>
            <BasicIconic />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = IconicDocs;