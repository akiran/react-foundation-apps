// Local Imports
var accordion = require('./lib/accordion');
var actionSheet = require('./lib/action-sheet');
var iconic = require('./lib/iconic');
var interchange = require('./lib/interchange');
var modal = require('./lib/modal');
var notification = require('./lib/notification');
var offcanvas = require('./lib/offcanvas');
var panel = require('./lib/panel');
var popup = require('./lib/popup');
var tabs = require('./lib/tabs');
var trigger = require('./lib/trigger');
var animationUtil = require('./lib/utils/animation');
var foundationAPI = require('./lib/utils/foundation-api');
var mqHelpers = require('./lib/utils/mq-helpers');
var mqInit = require('./lib/utils/mq-init');

module.exports = {
    Accordion: accordion,
    ActionSheet: actionSheet,
    Iconic: iconic,
    Interchange: interchange,
    Modal: modal,
    Notification: notification,
    OffCanvas: offcanvas,
    Panel: panel,
    Popup: popup,
    Tabs: tabs,
    Trigger: trigger,
    Utils: {
        animation: animationUtil,
        foundationAPI: foundationAPI,
        mqHelpers: mqHelpers,
        mqInit: mqInit
    }
};
