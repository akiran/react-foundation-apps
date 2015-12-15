//From https://github.com/zurb/foundation-apps/blob/master/js/angular/common/common.services.js
'use strict';

var PubSub = require('pubsub-js');
var assign = require('object-assign');

var listeners = [];
var settings = {};
var uniqueIds = [];

var foundationApi = {
  subscribe: PubSub.subscribe,
  publish: PubSub.publish,
  unsubscribe: PubSub.unsubscribe,
  closeActiveElements: function closeActiveElements(options) {
    var self = this;
    options = options || {};
    var activeElements = document.querySelectorAll('.is-active[data-closable]');
    Array.prototype.forEach.call(activeElements, function (el) {
      if (options.exclude !== el.id) {
        self.publish(el.id, 'close');
      }
    });
  },
  getSettings: function getSettings() {
    return settings;
  },
  modifySettings: function modifySettings(tree) {
    settings = angular.extend(settings, tree);
    return settings;
  },
  generateUuid: function generateUuid() {
    var uuid = '';

    //little trick to produce semi-random IDs
    do {
      uuid += 'zf-uuid-';
      for (var i = 0; i < 15; i++) {
        uuid += Math.floor(Math.random() * 16).toString(16);
      }
    } while (!uniqueIds.indexOf(uuid));

    uniqueIds.push(uuid);
    return uuid;
  }
};

module.exports = foundationApi;