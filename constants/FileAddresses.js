"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_path = 'businesses/';
const img_type = 'jpg';
const chats = {
    folder_chat: (roomId) => base_path + 'chats/' + roomId + '/'
};
const folder_medical_services = () => base_path + 'medical_services/';
exports.default = {
    chats,
    folder_medical_services
};
