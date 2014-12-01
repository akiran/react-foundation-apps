var React = require('react');
// React mixin for layers
// http://jsfiddle.net/LBAr8/
// https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
var LayerMixin = {
  componentDidMount: function() {
    // Appending to the body is easier than managing the z-index of everything on the page.
    this._layer = document.createElement('div');
    document.body.appendChild(this._layer);
    this._renderLayer();
  },
  componentDidUpdate: function() {
    this._renderLayer();
  },
  componentWillUnmount: function() {
      this._unrenderLayer();
      document.body.removeChild(this._layer);
  },
  _renderLayer: function() {
    React.render(this.renderLayer(), this._layer);
    if (this.layerDidMount) {
      this.layerDidMount(this._layer);
    }
  },
  _unrenderLayer: function() {
    if (this.layerWillUnmount) {
      this.layerWillUnmount(this._layer);
    }
    React.unmountComponentAtNode(this._layer);
  }
};

module.exports = LayerMixin;