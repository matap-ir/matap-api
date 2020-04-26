"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserType;
(function (UserType) {
    UserType["PATIENT"] = "PATIENT";
    UserType["DOCTOR"] = "DOCTOR";
})(UserType = exports.UserType || (exports.UserType = {}));
var HealthCenterType;
(function (HealthCenterType) {
    HealthCenterType["HOSPITAL"] = "HOSPITAL";
    HealthCenterType["CLINIC"] = "CLINIC";
})(HealthCenterType = exports.HealthCenterType || (exports.HealthCenterType = {}));
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
var IOStatus;
(function (IOStatus) {
    IOStatus["READY"] = "READY";
    IOStatus["DOWNLOADING"] = "DOWNLOADING";
    IOStatus["UPLOADING"] = "UPLOADING";
    IOStatus["WAITING_FOR_UPLOAD"] = "WAITING_FOR_UPLOAD";
    IOStatus["WAITING_FOR_DOWNLOAD"] = "WAITING_FOR_DOWNLOAD";
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
