"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    iceServers: {
        type: [{ username: String, credential: String, urls: [String] }]
    },
    mediaConstraints: Object,
    forceSpeaker: Boolean,
    termsandconditions: String,
    retryThreshold: Number,
    maxBitrate: {
        type: mongoose_1.Schema.Types.Mixed,
        required: false
    },
    preferredCodecs: {
        type: [String],
        required: false
    },
    android: {
        forceUpdate: { type: Boolean, required: true },
        versionCode: { type: String, required: true },
        downloadLink: { type: String, required: true },
        changeLog: { type: String, required: true }
    },
    ios: {
        forceUpdate: { type: Boolean, required: true },
        versionCode: { type: String, required: true },
        downloadLink: { type: String, required: true },
        changeLog: { type: String, required: true }
    }
};
exports.default = dbModel;
