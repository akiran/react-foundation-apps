//From https://github.com/zurb/foundation-apps/blob/master/js/angular/common/common.services.js

var listeners = [];
var settings  = {};
var uniqueIds = [];
var foundationApi = {
  subscribe: function(name, callback) {
    if (!listeners[name]) {
      listeners[name] = [];
    }

    listeners[name].push(callback);
    return true;
  },
  publish: function(name, msg) {
    if (!listeners[name]) {
      listeners[name] = [];
    }

    listeners[name].forEach(function(cb) {
      cb(msg);
    });

    return;
  },
  closeActiveElements: function(options) {
    var self = this;
    options = options || {};
    var activeElements = document.querySelectorAll('.is-active[zf-closable]');
    var id;
    if (activeElements.length) {
      for (var i = 0; i < activeElements.length; i=i+1) {
        id = activeElements[i].id;
        if (options.exclude !== id) {
          self.publish(id, 'close');
        }
      }
    }
  },
  generateUuid: function() {
    var uuid = '';

    //little trick to produce semi-random IDs
    do {
      uuid += 'zf-uuid-';
      for (var i=0; i<15; i++) {
        uuid += Math.floor(Math.random()*16).toString(16);
      }
    } while(!uniqueIds.indexOf(uuid));

    uniqueIds.push(uuid);
    return uuid;
  }, 
};

module.exports = foundationApi;