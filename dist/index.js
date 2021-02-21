"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = exports.FileAddresses = exports.Events = void 0;
const tslib_1 = require("tslib");
const FileAddresses_1 = tslib_1.__importDefault(require("./constants/FileAddresses"));
exports.FileAddresses = FileAddresses_1.default;
const Helper_1 = tslib_1.__importDefault(require("./helpers/Helper"));
exports.Helper = Helper_1.default;
const Enums_1 = require("./models/Enums");
tslib_1.__exportStar(require("./models/Enums"), exports);
class Events {
}
exports.Events = Events;
Events.conference = {
    detection: Enums_1.ConferenceDetectionEventTypes,
    features: Enums_1.ConferenceFeaturesEventTypes,
    mediaDevices: Enums_1.ConferenceMediaDevicesEventTypes,
    track: Enums_1.ConferenceTrackEventTypes,
    room: Enums_1.ConferenceRoomEventTypes,
    participants: {
        presence: Enums_1.ConferenceParticipantPresenceEventTypes,
        connection: Enums_1.ConferenceParticipantConnectionEventTypes,
    },
    visit: {
        status: Enums_1.VisitStatus,
        events: Enums_1.EventType
    }
};
Events.network = Enums_1.NetworkEventTypes;
Events.socket = Enums_1.SocketEventTypes;
