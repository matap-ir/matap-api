"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    roomId: { type: String, required: true },
    members: { type: [String], required: true, default: [] },
    conversations: [{ delivered: { type: [String], default: [] }, chat: require('../chat/DBModel').default }]
};
