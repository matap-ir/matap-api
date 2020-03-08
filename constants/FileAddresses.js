"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chats_base_path = 'businesses/';
const img_type = 'jpg';
const chats = {
    folder_chat: (roomId) => chats_base_path + 'chats/' + roomId + '/',
};
exports.default = {
    chats
};
