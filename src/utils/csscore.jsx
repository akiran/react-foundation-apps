'use strict';

var SPACE = ' ';
var RE_CLASS = /[\n\t\r]/g;

var norm = function (elemClass) {
  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
};

module.exports = {
  addClass(elem, className) {
    elem.className += ' ' + className;
  },

  removeClass(elem, needle) {
    var elemClass = elem.className.trim();
    var className = norm(elemClass);
    needle = needle.trim();
    needle = SPACE + needle + SPACE;
    while (className.indexOf(needle) >= 0) {
      className = className.replace(needle, SPACE);
    }
    elem.className = className.trim();
  }
};