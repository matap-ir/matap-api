"use strict";
exports.__esModule = true;
// const base_path = 'D:/LifeMate/';
var base_path = 'businesses/';
var img_type = 'jpg';
var chats = {
    folder_chat: function (roomId) { return base_path + 'chats/' + roomId + '/'; }
};
var folder_medical_services = function () { return base_path + 'medical_services/'; };
exports["default"] = {
    chats: chats,
    folder_medical_services: folder_medical_services
};
//# sourceMappingURL=FileAddresses.js.map