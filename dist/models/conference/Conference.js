"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const javascript_dev_kit_1 = tslib_1.__importDefault(require("javascript-dev-kit"));
class Conference {
    constructor(visitId, host, type, videoCallVersion, config, initiator, receiver) {
        this.participants = [];
        this.id = javascript_dev_kit_1.default.generateUUID();
        this.initiator = initiator;
        this.host = host;
        this.receiver = receiver;
        this.visitId = visitId;
        this.createdAt = Date.now();
        this.type = type;
        this.mediaConstraints = config.mediaConstraints;
        this.videoCallVersion = videoCallVersion;
        this.iceTransportPolicy = config.iceTransportPolicy;
        this.videoMaxBitrate = config.videoMaxBitrate;
        this.audioMaxBitrate = config.audioMaxBitrate;
        this.trickleIce = config.trickleIce;
        this.preferredCodecs = config.preferredCodecs;
        this.pingTimeout = config.conferencePingTimeout;
        this.iceServers = config.iceServers;
        this.forceSpeaker = config.forceSpeaker;
        this.retryThreshold = config.retryThreshold;
        this.state = 'initiating';
    }
    getParticipant(userId) {
        userId = String(userId);
        return this.participants.find(m => m.id === userId);
    }
}
exports.default = Conference;
