"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatType = exports.EventType = exports.IOStatus = exports.StreamType = exports.ConferenceType = exports.ConferenceRoomEventTypes = exports.ConferenceParticipantPresenceEventTypes = exports.ConferenceParticipantConnectionEventTypes = exports.ConferenceTrackEventTypes = exports.ConferenceMediaDevicesEventTypes = exports.ConferenceFeaturesEventTypes = exports.ConferenceDetectionEventTypes = exports.SocketEventTypes = exports.NetworkEventTypes = exports.DebugType = exports.SendStatus = exports.ReceiveStatus = exports.VisitStatus = exports.HealthCenterType = exports.TransactionType = exports.ReservationState = exports.AdminType = exports.TypingStatus = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["PATIENT"] = "PATIENT";
    UserType["DOCTOR"] = "DOCTOR";
})(UserType = exports.UserType || (exports.UserType = {}));
var TypingStatus;
(function (TypingStatus) {
    TypingStatus["TYPING"] = "TYPING";
    TypingStatus["IDLE"] = "IDLE";
    TypingStatus["SENDING_MEDIA"] = "SENDING_MEDIA";
    TypingStatus["RECORDING_VOICE"] = "RECORDING_VOICE";
})(TypingStatus = exports.TypingStatus || (exports.TypingStatus = {}));
var AdminType;
(function (AdminType) {
    AdminType["MANAGER"] = "MANAGER";
    AdminType["ADMIN"] = "ADMIN";
    AdminType["HEALTHCENTER"] = "HEALTHCENTER";
})(AdminType = exports.AdminType || (exports.AdminType = {}));
var ReservationState;
(function (ReservationState) {
    ReservationState["WAITING_FOR_OFFERS"] = "WAITING_FOR_OFFERS";
    ReservationState["WAITING_FOR_REQUEST"] = "WAITING_FOR_CONFIRM";
    ReservationState["WAITING_FOR_OFFER_CONFIRM"] = "WAITING_FOR_OFFER_CONFIRM";
    ReservationState["CONFIRMED"] = "CONFIRMED";
    ReservationState["CANCELLED"] = "CANCELLED";
})(ReservationState = exports.ReservationState || (exports.ReservationState = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["CHARGE_BY_GATEWAY"] = "CHARGE_BY_GATEWAY";
    TransactionType["CHARGE_BY_ADMIN"] = "CHARGE_BY_ADMIN";
    TransactionType["REDUCE_BY_ADMIN"] = "REDUCE_BY_ADMIN";
    TransactionType["STARTER_CHARGE"] = "STARTER_CHARGE";
    TransactionType["VISIT_PAYMENT"] = "VISIT_PAYMENT";
    TransactionType["PAYROLL"] = "PAYROLL";
    TransactionType["RETURN_VISIT_PAYMENT"] = "RETURN_VISIT_PAYMENT";
    TransactionType["SERVICE_REQUEST_PAYMENT"] = "SERVICE_REQUEST_PAYMENT";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var HealthCenterType;
(function (HealthCenterType) {
    HealthCenterType["HOSPITAL"] = "HOSPITAL";
    HealthCenterType["CLINIC"] = "CLINIC";
})(HealthCenterType = exports.HealthCenterType || (exports.HealthCenterType = {}));
var VisitStatus;
(function (VisitStatus) {
    VisitStatus["IN_QUEUE"] = "IN_QUEUE";
    VisitStatus["STARTED"] = "STARTED";
    VisitStatus["ENDED"] = "ENDED";
    VisitStatus["CANCELLED"] = "CANCELLED";
})(VisitStatus = exports.VisitStatus || (exports.VisitStatus = {}));
var ReceiveStatus;
(function (ReceiveStatus) {
    ReceiveStatus["FAILED"] = "FAILED";
    ReceiveStatus["DOWNLOADING"] = "DOWNLOADING";
    ReceiveStatus["FILE_AVAILABLE"] = "FILE_AVAILABLE";
})(ReceiveStatus = exports.ReceiveStatus || (exports.ReceiveStatus = {}));
var SendStatus;
(function (SendStatus) {
    SendStatus["FAILED"] = "FAILED";
    SendStatus["WAITING_FOR_QUEUE"] = "WAITING_FOR_QUEUE";
    SendStatus["SENDING"] = "SENDING";
    SendStatus["SENT"] = "SENT";
    SendStatus["DELIVERED"] = "DELIVERED";
    SendStatus["READEN"] = "READEN";
})(SendStatus = exports.SendStatus || (exports.SendStatus = {}));
var DebugType;
(function (DebugType) {
    DebugType["outgoing"] = "outgoing";
    DebugType["incoming"] = "incoming";
    DebugType["presence"] = "presence";
    DebugType["remote_logs"] = "remote_logs";
})(DebugType = exports.DebugType || (exports.DebugType = {}));
var NetworkEventTypes;
(function (NetworkEventTypes) {
    NetworkEventTypes["CHANGE"] = "network.change";
})(NetworkEventTypes = exports.NetworkEventTypes || (exports.NetworkEventTypes = {}));
var SocketEventTypes;
(function (SocketEventTypes) {
    SocketEventTypes["CONNECTED"] = "socket.connected";
    SocketEventTypes["DISCONNECTED"] = "socket.disconnected";
    SocketEventTypes["RECONNECTING"] = "socket.reconnecting";
    SocketEventTypes["RECONNECTION_FAILED"] = "socket.reconnection_failed";
    SocketEventTypes["WILL_NOT_RECONNECT"] = "socket.will_not_reconnect";
})(SocketEventTypes = exports.SocketEventTypes || (exports.SocketEventTypes = {}));
var ConferenceDetectionEventTypes;
(function (ConferenceDetectionEventTypes) {
    ConferenceDetectionEventTypes["MIC_INPUT_STATE"] = "conference.detection.mic.input_state";
    ConferenceDetectionEventTypes["TALK_WHILE_MUTED"] = "conference.detection.talk_while_muted";
})(ConferenceDetectionEventTypes = exports.ConferenceDetectionEventTypes || (exports.ConferenceDetectionEventTypes = {}));
var ConferenceFeaturesEventTypes;
(function (ConferenceFeaturesEventTypes) {
    ConferenceFeaturesEventTypes["MIC_MUTE"] = "conference.feature.mic.mute";
    ConferenceFeaturesEventTypes["MIC_NOISE"] = "conference.feature.mic.noise";
})(ConferenceFeaturesEventTypes = exports.ConferenceFeaturesEventTypes || (exports.ConferenceFeaturesEventTypes = {}));
var ConferenceMediaDevicesEventTypes;
(function (ConferenceMediaDevicesEventTypes) {
    ConferenceMediaDevicesEventTypes["LIST_CHANGED"] = "conference.media_devices.list_changed";
    ConferenceMediaDevicesEventTypes["PERMISSION_STATE_UPDATE"] = "conference.media_devices.permission_state_update";
    ConferenceMediaDevicesEventTypes["SLOW_GET"] = "conference.media_devices.slow_get";
    ConferenceMediaDevicesEventTypes["PERMISSION_DENIED"] = "conference.media_devices.permission_denied";
    ConferenceMediaDevicesEventTypes["ERROR_GETTING"] = "conference.media_devices.error_getting";
})(ConferenceMediaDevicesEventTypes = exports.ConferenceMediaDevicesEventTypes || (exports.ConferenceMediaDevicesEventTypes = {}));
var ConferenceTrackEventTypes;
(function (ConferenceTrackEventTypes) {
    ConferenceTrackEventTypes["ADDED"] = "conference.track.added";
    ConferenceTrackEventTypes["REMOVED"] = "conference.track.removed";
    ConferenceTrackEventTypes["AUDIO_LEVEL_CHANGED"] = "conference.track.audio_level_changed";
    ConferenceTrackEventTypes["SOURCE_DATA_STATE"] = "conference.track.source_data_state";
    ConferenceTrackEventTypes["NO_STREAM"] = "conference.track.no_stream";
    ConferenceTrackEventTypes["UNSUPPORTED_RESOLUTION"] = "conference.track.unsupported_resolution";
})(ConferenceTrackEventTypes = exports.ConferenceTrackEventTypes || (exports.ConferenceTrackEventTypes = {}));
var ConferenceParticipantConnectionEventTypes;
(function (ConferenceParticipantConnectionEventTypes) {
    ConferenceParticipantConnectionEventTypes["CONNECTING"] = "conference.participant.connection.connecting";
    ConferenceParticipantConnectionEventTypes["INTERRUPTED"] = "conference.participant.connection.interrupted";
    ConferenceParticipantConnectionEventTypes["RESTORING"] = "conference.participant.connection.restoring";
    ConferenceParticipantConnectionEventTypes["RESTORED"] = "conference.participant.connection.restored";
    ConferenceParticipantConnectionEventTypes["ESTABLISHED"] = "conference.participant.connection.established";
    ConferenceParticipantConnectionEventTypes["QUALITY_STATE"] = "conference.participant.connection.quality_state";
    ConferenceParticipantConnectionEventTypes["GET_STATS_UPDATE"] = "conference.participant.connection.get_stats_update";
    ConferenceParticipantConnectionEventTypes["PING"] = "conference.participant.connection.ping";
})(ConferenceParticipantConnectionEventTypes = exports.ConferenceParticipantConnectionEventTypes || (exports.ConferenceParticipantConnectionEventTypes = {}));
var ConferenceParticipantPresenceEventTypes;
(function (ConferenceParticipantPresenceEventTypes) {
    ConferenceParticipantPresenceEventTypes["JOINED"] = "conference.participant.presence.joined";
    ConferenceParticipantPresenceEventTypes["LEFT"] = "conference.participant.presence.left";
})(ConferenceParticipantPresenceEventTypes = exports.ConferenceParticipantPresenceEventTypes || (exports.ConferenceParticipantPresenceEventTypes = {}));
var ConferenceRoomEventTypes;
(function (ConferenceRoomEventTypes) {
    ConferenceRoomEventTypes["FAILED_CREATING"] = "conference.room.failed_creating";
    ConferenceRoomEventTypes["CREATE"] = "conference.room.create";
    ConferenceRoomEventTypes["REJECTED"] = "conference.room.rejected";
    ConferenceRoomEventTypes["DESTROYED"] = "conference.room.destroyed";
})(ConferenceRoomEventTypes = exports.ConferenceRoomEventTypes || (exports.ConferenceRoomEventTypes = {}));
var ConferenceType;
(function (ConferenceType) {
    ConferenceType["P2P"] = "p2p";
    ConferenceType["STREAM"] = "stream";
})(ConferenceType = exports.ConferenceType || (exports.ConferenceType = {}));
var StreamType;
(function (StreamType) {
    StreamType["audio"] = "audio";
    StreamType["video"] = "video";
    StreamType["stream_receiver"] = "stream_receiver";
    StreamType["stream_sender"] = "stream_sender";
    StreamType["desktop"] = "desktop";
})(StreamType = exports.StreamType || (exports.StreamType = {}));
var IOStatus;
(function (IOStatus) {
    IOStatus["READY"] = "READY";
    IOStatus["DOWNLOADING"] = "DOWNLOADING";
    IOStatus["UPLOADING"] = "UPLOADING";
    IOStatus["WAITING_FOR_UPLOAD"] = "WAITING_FOR_UPLOAD";
    IOStatus["WAITING_FOR_DOWNLOAD"] = "WAITING_FOR_DOWNLOAD";
    IOStatus["IN_DOWNLOAD_QUEUE"] = "IN_DOWNLOAD_QUEUE";
    IOStatus["IN_UPLOAD_QUEUE"] = "IN_UPLOAD_QUEUE";
})(IOStatus = exports.IOStatus || (exports.IOStatus = {}));
var EventType;
(function (EventType) {
    EventType["REQUEST_VISIT"] = "REQUEST_VISIT";
    EventType["REQUEST_END_VISIT"] = "REQUEST_END_VISIT";
    EventType["VISIT_REQUEST_ACCEPTED"] = "VISIT_REQUEST_ACCEPTED";
    EventType["VISIT_REQUEST_DECLINED"] = "VISIT_REQUEST_DECLINED";
    EventType["VISIT_REQUEST_INQUEUE"] = "VISIT_REQUEST_INQUEUE";
    EventType["EVENT_ERROR"] = "EVENT_ERROR";
    EventType["EVENT_STATUS_UPDATE"] = "EVENT_STATUS_UPDATE";
    EventType["EVENT_SET_AVAILABLE"] = "EVENT_SET_AVAILABLE";
    EventType["EVENT_CALL_REQUEST"] = "EVENT_CALL_REQUEST";
    EventType["EVENT_CALL_ACCEPTED"] = "EVENT_CALL_ACCEPTED";
    EventType["EVENT_CALL_DECLINED"] = "EVENT_CALL_DECLINED";
    EventType["EVENT_CALL_ENDED"] = "EVENT_CALL_ENDED";
})(EventType = exports.EventType || (exports.EventType = {}));
var ChatType;
(function (ChatType) {
    ChatType["TEXT"] = "TEXT";
    ChatType["IMAGE"] = "IMAGE";
    ChatType["VIDEO"] = "VIDEO";
    ChatType["MUSIC"] = "MUSIC";
    ChatType["UNKNOWN"] = "UNKNOWN";
    ChatType["GIF"] = "GIF";
    ChatType["PDF"] = "PDF";
})(ChatType = exports.ChatType || (exports.ChatType = {}));
