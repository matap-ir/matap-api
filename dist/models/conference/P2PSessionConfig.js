"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const javascript_dev_kit_1 = tslib_1.__importDefault(require("javascript-dev-kit"));
class P2PSessionConfig {
    constructor(type, version, config, initiator, receiver, host) {
        this.state = Enums_1.ParticipantState.connecting;
        this.id = javascript_dev_kit_1.default.generateUUID();
        this.retryThreshold = config.retryThreshold;
        this.forceSpeaker = config.forceSpeaker;
        this.host = host;
        this.initiator = initiator;
        this.receiver = receiver;
        this.createdAt = Date.now();
        this.type = type;
        this.mediaConstraints = config.mediaConstraints;
        this.videoCallVersion = version;
        this.iceTransportPolicy = config.iceTransportPolicy;
        this.videoMaxBitrate = config.videoMaxBitrate;
        this.audioMaxBitrate = config.audioMaxBitrate;
        this.trickleIce = config.trickleIce;
        this.preferredCodecs = config.preferredCodecs;
        this.pingTimeout = config.conferencePingTimeout;
        this.iceServers = config.iceServers;
    }
}
exports.default = P2PSessionConfig;
