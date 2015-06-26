var helpers = require('./mq-helpers');
var foundationApi = require('./foundation-api');
var assign = require('object-assign');

function throttleUtil(func, delay) {
  var timer = null;

  return function () {
    var context = this, args = arguments;

    if (timer === null) {
      timer = setTimeout(function () {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

function init() {
  var mediaQueries;
  var extractedMedia;
  var mediaObject;

  var namedQueries = {
    'default' : 'only screen',
    landscape : 'only screen and (orientation: landscape)',
    portrait : 'only screen and (orientation: portrait)',
    retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
    'only screen and (min--moz-device-pixel-ratio: 2),' +
    'only screen and (-o-min-device-pixel-ratio: 2/1),' +
    'only screen and (min-device-pixel-ratio: 2),' +
    'only screen and (min-resolution: 192dpi),' +
    'only screen and (min-resolution: 2dppx)'
  };

  helpers.headerHelper(['foundation-mq']);
  extractedMedia = helpers.getStyle('.foundation-mq', 'font-family');

  mediaQueries = helpers.parseStyleToObject((extractedMedia));

  for(var key in mediaQueries) {
    mediaQueries[key] = 'only screen and (min-width: ' + mediaQueries[key].replace('rem', 'em') + ')';
  }

  foundationApi.modifySettings({
    mediaQueries: assign(mediaQueries, namedQueries)
  });

  window.addEventListener('resize', throttleUtil(function() {
    foundationApi.publish('resize', 'window resized');
  }, 50));
}

module.exports = init;
