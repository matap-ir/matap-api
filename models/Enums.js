"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserType;
(function (UserType) {
    UserType["PATIENT"] = "PATIENT";
    UserType["DOCTOR"] = "DOCTOR";
})(UserType = exports.UserType || (exports.UserType = {}));
var ReceiveStatus;
(function (ReceiveStatus) {
    ReceiveStatus[ReceiveStatus["FAILED"] = 0] = "FAILED";
    ReceiveStatus[ReceiveStatus["DOWNLOADING"] = 1] = "DOWNLOADING";
    ReceiveStatus[ReceiveStatus["FILE_AVAILABLE"] = 2] = "FILE_AVAILABLE";
})(ReceiveStatus = exports.ReceiveStatus || (exports.ReceiveStatus = {}));
var SendStatus;
(function (SendStatus) {
    SendStatus[SendStatus["FAILED"] = -1] = "FAILED";
    SendStatus[SendStatus["WAITING_FOR_QUEUE"] = 0] = "WAITING_FOR_QUEUE";
    SendStatus[SendStatus["SENDING"] = 1] = "SENDING";
    SendStatus[SendStatus["SENT"] = 2] = "SENT";
    SendStatus[SendStatus["DELIVERED"] = 3] = "DELIVERED";
    SendStatus[SendStatus["READEN"] = 4] = "READEN";
})(SendStatus = exports.SendStatus || (exports.SendStatus = {}));
var EventType;
(function (EventType) {
    EventType["REQUEST_VISIT"] = "REQUEST_VISIT";
    EventType["REQUEST_END_VISIT"] = "REQUEST_END_VISIT";
    EventType["CANCEL_VISIT_REQUEST"] = "CANCEL_VISIT_REQUEST";
    EventType["DOCTOR_NOT_FOUND"] = "DOCTOR_NOT_FOUND";
    EventType["DOCTOR_UNAVAILABLE"] = "DOCTOR_UNAVAILABLE";
    EventType["VISIT_REQUEST_TIMEDOUT"] = "VISIT_REQUEST_TIMEDOUT";
    EventType["VISIT_REQUEST_ACCEPTED"] = "VISIT_REQUEST_ACCEPTED";
    EventType["VISIT_REQUEST_DECLINED"] = "VISIT_REQUEST_DECLINED";
    EventType["VISIT_REQUEST_INQUEUE"] = "VISIT_REQUEST_INQUEUE";
    EventType["VISIT_STARTED"] = "VISIT_STARTED";
    EventType["VISIT_ENDED"] = "VISIT_ENDED";
    EventType["ROOM_NOT_FOUND"] = "ROOM_NOT_FOUND";
    EventType["EVENT_STATUS_UPDATE"] = "EVENT_STATUS_UPDATE";
    EventType["EVENT_SET_AVAILABLE"] = "EVENT_SET_AVAILABLE";
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
