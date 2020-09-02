"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    iceServers: {
        type: [{ username: String, credential: String, urls: [String] }]
    },
    mediaConstraints: Object,
    forceSpeaker: Boolean,
    termsandconditions: String,
    android: {
        forceUpdate: { type: Boolean, required: true },
        versionCode: { type: String, required: true },
        downloadLink: { type: String, required: true }
    },
    ios: {
        forceUpdate: { type: Boolean, required: true },
        versionCode: { type: String, required: true },
        downloadLink: { type: String, required: true }
    }
};
exports.default = dbModel;
