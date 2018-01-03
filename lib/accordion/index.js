var React = require('react');

class Accordion extends React.Component {
  static displayName = 'Accordion';

  static defaultProps = {
    autoOpen: true,
    multiOpen: false,
    collapsible: false
  };

  state = { sections: [] };

  componentWillMount() {
    var sections = [];
    React.Children.forEach(this.props.children, function (child, index) {
      sections.push({ active: false });
    });
    if (this.props.autoOpen) {
      sections[0].active = true;
    }
    this.setState({ sections: sections });
  }

  select = (selectSection) => {
    var sections = this.state.sections;
    sections.forEach(function (section, index) {
      if (this.props.multiOpen) {
        if (index === selectSection) {
          section.active = !section.active;
        }
      } else {
        if (index === selectSection) {
          section.active = this.props.collapsible === true ? !section.active : true;
        } else {
          section.active = false;
        }
      }
    }.bind(this));
    this.setState({ sections: sections });
  };

  render() {
    var children = React.Children.map(this.props.children, function (child, index) {
      return React.cloneElement(child, {
        active: this.state.sections[index] ? this.state.sections[index].active : false,
        activate: this.select.bind(this, index)
      });
    }.bind(this));
    return React.createElement(
      'div',
      { className: 'accordion' },
      children
    );
  }
}

module.exports = Accordion;
Accordion.Item = require('./item');