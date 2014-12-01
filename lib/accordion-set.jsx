var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');

var AccordionSet = React.createClass({
  getInitialState: function () {
    return { sections: [] };
  },
  getDefaultProps: function () {
    return { multiOpen: false };
  },
  componentDidMount: function () {
    var sections = [];
    React.Children.forEach(this.props.children, function (child, index) {
      sections.push({active: false});
    });
    this.setState({sections: sections});
  },
  select: function (selectSection) {
    var sections = this.state.sections;
    sections.forEach(function (section, index) {
      if(this.props.multiOpen) {
        if(index === selectSection) {
          section.active = !section.active;
        }
      } else {
        section.active = false;
        if(index === selectSection) {
          section.active = true;
        }
      }
    }.bind(this));
    this.setState({sections: sections});
  },
  // closeAll: function () {
  //   var sections = this.state.sections.map(function(section) {
  //     return {active: false};
  //   });
  //   this.setState({sections: sections});
  // },
  render: function () {
    var children = React.Children.map(this.props.children, function (child, index) {
      return cloneWithProps(child, {
        active: this.state.sections[index]? this.state.sections[index].active: false,
        activate: this.select.bind(this, index)
      });
    }.bind(this));
    return (
      <div className='accordion'>{children}</div>
    );
  }
});

module.exports = AccordionSet;