"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatHistory {
    constructor(roomId, members, conversations) {
        this.roomId = roomId;
        this.members = members;
        this.conversations = conversations;
    }
}
exports.default = ChatHistory;
