"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    iceServers: {
        type: [{ username: String, credential: String, urls: [String] }]
    }
};
exports.default = dbModel;
