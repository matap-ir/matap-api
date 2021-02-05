"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const base_path = 'D:/LifeMate/';
var img_type = 'jpg';
var chats = {
    folder_chat: function (roomId) { return '/chats/' + roomId + '/'; }
};
var folder_medical_services = function () { return '/medical_services/'; };
exports.default = {
    chats: chats,
    folder_medical_services: folder_medical_services
};
