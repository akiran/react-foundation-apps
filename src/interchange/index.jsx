var React = require('react');
var ResponsiveMixin = require('react-responsive-mixin');

var namedQueries = {
  // small: '(min-width: 0) and  (max-width: 640px)',
  // medium: '(min-width: 641px) and  (max-width: 1200px)',
  // large: '(min-width: 1201px) and  (max-width: 1440px)',
  // 'default' : 'only screen',
  // landscape : 'only screen and (orientation: landscape)',
  // portrait : 'only screen and (orientation: portrait)',
  // retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
  //   'only screen and (min--moz-device-pixel-ratio: 2),' +
  //   'only screen and (-o-min-device-pixel-ratio: 2/1),' +
  //   'only screen and (min-device-pixel-ratio: 2),' +
  //   'only screen and (min-resolution: 192dpi),' +
  //   'only screen and (min-resolution: 2dppx)'
};

var Interchange = React.createClass({
  mixins: [ResponsiveMixin],
  getInitialState: function () {
    return {matchedMedia: 'large'};
  },
  componentDidMount: function () {
    // for (var name in namedQueries) {
    //   this.media(namedQueries[name], function () {
    //     this.setState({matchedMedia: name});
    //   }.bind(this));
    // }
    this.media({minWidth: 0, maxWidth: 640}, function () {
      this.setState({matchedMedia: 'small'});  
    }.bind(this));
    this.media({minWidth: 641, maxWidth: 1200}, function () {
      this.setState({matchedMedia: 'medium'});  
    }.bind(this));
    this.media({minWidth: 1200, maxWidth: 1440}, function () {
      this.setState({matchedMedia: 'large'});  
    }.bind(this));
  },
  render: function () {
    var matchedNode = null;
    React.Children.forEach(this.props.children, function (child) {
      if(child.props.media === this.state.matchedMedia) {
        matchedNode = child;
      }
    }.bind(this));
    return matchedNode;
  }
});

module.exports = Interchange;