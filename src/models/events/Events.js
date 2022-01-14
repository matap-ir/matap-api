"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.socket = exports.network = void 0;
var Enums_1 = require("../Enums");
var listeners = {};
var Conference = /** @class */ (function () {
    function Conference() {
    }
    Conference.detection = Enums_1.ConferenceDetectionEventTypes;
    Conference.features = Enums_1.ConferenceFeaturesEventTypes;
    Conference.mediaDevices = Enums_1.ConferenceMediaDevicesEventTypes;
    Conference.track = Enums_1.ConferenceTrackEventTypes;
    Conference.room = Enums_1.ConferenceRoomEventTypes;
    Conference.connection = Enums_1.ConferenceParticipantConnectionEventTypes;
    Conference.presence = Enums_1.ConferenceParticipantPresenceEventTypes;
    return Conference;
}());
var Visit = /** @class */ (function () {
    function Visit() {
        this.status = Enums_1.VisitStatus;
        this.events = Enums_1.EventType;
    }
    return Visit;
}());
exports.network = Enums_1.NetworkEventTypes;
exports.socket = Enums_1.SocketEventTypes;
function on(event, cb) {
    __spreadArrays(event).forEach(function (e) {
        listeners[e] = listeners[e] || [];
        !listeners[e].includes(cb) && listeners[e].push(cb);
    });
}
function off(cb) {
    Object.keys(listeners).forEach(function (k) {
        listeners[k].removeValue(cb);
    });
}
exports["default"] = {
    Conference: Conference,
    Visit: Visit,
    network: exports.network,
    socket: exports.socket,
    on: on,
    off: off
};
//# sourceMappingURL=Events.js.map