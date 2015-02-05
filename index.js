// Local Imports
var
    accordion = require( './lib/accordion' ),
    actionSheet = require( './lib/action-sheet' ),
    iconic = require( './lib/iconic' ),
    interchange = require( './lib/interchange' ),
    modal = require( './lib/modal' ),
    notification = require( './lib/notification' ),
    offcanvas = require( './lib/offcanvas' ),
    panel = require( './lib/panel' ),
    popup = require( './lib/popup' ),
    tabs = require( './lib/tabs' ),
    trigger = require( './lib/trigger' ),
    animationUtil = require( './lib/utils/animation' ),
    foundationAPI = require( './lib/utils/foundation-api' ),
    mqHelpers = require( './lib/utils/mq-helpers' ),
    mqInit = require( './lib/utils/mq-init' )

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
}
