"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socket = exports.network = void 0;
const Enums_1 = require("../Enums");
const listeners = {};
class Conference {
}
Conference.detection = Enums_1.ConferenceDetectionEventTypes;
Conference.features = Enums_1.ConferenceFeaturesEventTypes;
Conference.mediaDevices = Enums_1.ConferenceMediaDevicesEventTypes;
Conference.track = Enums_1.ConferenceTrackEventTypes;
Conference.room = Enums_1.ConferenceRoomEventTypes;
Conference.connection = Enums_1.ConferenceParticipantConnectionEventTypes;
Conference.presence = Enums_1.ConferenceParticipantPresenceEventTypes;
class Visit {
    constructor() {
        this.status = Enums_1.VisitStatus;
        this.events = Enums_1.EventType;
    }
}
exports.network = Enums_1.NetworkEventTypes;
exports.socket = Enums_1.SocketEventTypes;
function on(event, cb) {
    [...event].forEach((e) => {
        listeners[e] = listeners[e] || [];
        !listeners[e].includes(cb) && listeners[e].push(cb);
    });
}
function off(cb) {
    Object.keys(listeners).forEach((k) => {
        listeners[k].removeValue(cb);
    });
}
exports.default = {
    Conference,
    Visit,
    network: exports.network,
    socket: exports.socket,
    on,
    off
};
