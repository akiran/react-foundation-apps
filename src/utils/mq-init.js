var helpers = require('./mq-helpers');
var foundationApi = require('./foundation-api');

function init() {
  var mediaQueries;
  var extractedMedia;
  var mediaObject;

  helpers.headerHelper(['foundation-mq']);
  extractedMedia = helpers.getStyle('.foundation-mq', 'font-family');

  mediaQueries = helpers.parseStyleToObject((extractedMedia));

  for(var key in mediaQueries) {
    mediaQueries[key] = 'only screen and (min-width: ' + mediaQueries[key].replace('rem', 'em') + ')';
  }

  foundationApi.modifySettings({
    mediaQueries: mediaQueries
  });

  window.addEventListener('resize', u.throttle(function() {
    foundationApi.publish('resize', 'window resized');
  }, 50));
}
