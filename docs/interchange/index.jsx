var React = require('react');
var BasicInterchange = require('./basic');
var Highlight = require('react-highlight/optimized');

var InterchangeDocs = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Interchange</h2>
        <h4 className='subheader'>A simple JavaScript solution for responsive images and content. Interchange uses media queries to dynamically load responsive content that is appropriate for different users' browsers</h4>
        <hr />
          <p>Resize the page to see the content change.</p>
          <BasicInterchange /> 
        <hr/>
        <h3>Basic</h3>
        <div className='grid-block'>
          <div className='grid-content'>
            <Highlight innerHTML={true} languages={['xml']}>
              {require('./basic.md')}
            </Highlight>
          </div>
          <div className='grid-content'>
            <BasicInterchange />
          </div>
        </div> 
      </div>
    );
  }
});

module.exports = InterchangeDocs;