"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    id: { type: String, required: true, index: true, unique: true },
    host: { type: String, required: true },
    visitId: { type: String, required: true, index: true },
    createdAt: { type: Number, required: true },
    type: { type: String, required: true },
    initiator: { type: mongoose_1.Schema.Types.Mixed, required: true },
    receiver: { type: mongoose_1.Schema.Types.Mixed, required: true },
    iceServers: { type: mongoose_1.Schema.Types.Mixed, required: true },
    mediaConstraints: { type: mongoose_1.Schema.Types.Mixed, required: true },
    videoCallVersion: { type: String, required: true },
    retryThreshold: { type: Number, required: true },
    state: { type: String, required: true, index: true },
    iceTransportPolicy: { type: String, required: true },
    videoMaxBitrate: { type: mongoose_1.Schema.Types.Mixed, required: false },
    audioMaxBitrate: { type: mongoose_1.Schema.Types.Mixed, required: false },
    preferredCodecs: { type: mongoose_1.Schema.Types.Mixed, required: true },
    trickleIce: { type: Boolean, required: true },
    pingTimeout: { type: Number, required: false },
    forceSpeaker: { type: Boolean, required: true },
    events: { type: mongoose_1.Schema.Types.Mixed, required: true }
};
exports.default = dbModel;
