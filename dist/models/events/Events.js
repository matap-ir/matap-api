"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("../Enums");
var Events;
(function (Events) {
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
    Events.Conference = Conference;
    class Visit {
        constructor() {
            this.status = Enums_1.VisitStatus;
            this.events = Enums_1.EventType;
        }
    }
    Events.Visit = Visit;
    Events.network = Enums_1.NetworkEventTypes;
    Events.socket = Enums_1.SocketEventTypes;
    function on(events, cb) {
        [...events].forEach((e) => {
            listeners[e] = listeners[e] || [];
            !listeners[e].includes(cb) && listeners[e].push(cb);
        });
    }
    Events.on = on;
    function off(cb) {
        Object.keys(listeners).forEach((k) => {
            listeners[k].removeValue(cb);
        });
    }
    Events.off = off;
})(Events || (Events = {}));
exports.default = Events;
