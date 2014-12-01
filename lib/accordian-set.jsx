var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');

var AccordianSet = React.createClass({
  getInitialState: function () {
    return { sections: [] };
  },
  getDefaultProps: function () {
    return {multiOpen: false};
  },
  select: function (selectSection) {

  },
  closeAll: function () {
    var sections = this.state.sections;
    sections.forEach(function(section) {
      section.active = false;
    });
  },
  render: function () {
    var children = React.Children.map(this.props.children, function (child, index) {
      return cloneWithProps(child, {

      });
    });
    return (
      <div className='accordian'>{children}</div>
    );
  }
});

module.exports = AccordianSet;