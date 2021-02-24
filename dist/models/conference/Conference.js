"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const javascript_dev_kit_1 = tslib_1.__importDefault(require("javascript-dev-kit"));
class Conference {
    constructor(visitId, type, version, config, videoEnabled) {
        this.relations = [];
        this.participants = [];
        this._id = javascript_dev_kit_1.default.generateUUID();
        this.visitId = visitId;
        this.createdAt = Date.now();
        this.videoEnabled = videoEnabled;
        this.type = type;
        this.mediaConstraints = config.mediaConstraints;
        this.version = version;
        this.iceTransportPolicy = config.iceTransportPolicy;
        this.videoMaxBitrate = config.videoMaxBitrate;
        this.audioMaxBitrate = config.audioMaxBitrate;
        this.trickleIce = config.trickleIce;
        this.preferredCodecs = config.preferredCodecs;
        this.pingTimeout = config.conferencePingTimeout;
        this.iceServers = config.iceServers;
    }
    setStreamType(userId, streamType) {
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if (participant) {
            participant.streamType = streamType;
            return true;
        }
        return false;
    }
    setClientInfo(userId, info, connectionType, transportType) {
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if (participant) {
            participant.clientInfo = info;
            participant.connectionType = connectionType;
            participant.transportType = transportType;
            return true;
        }
        return false;
    }
    getParticipant(userId) {
        userId = String(userId);
        return this.participants.find(m => m._id === userId);
    }
    addParticipant(userId, streamType) {
        userId = String(userId);
        let participant = this.getParticipant(userId);
        if (!participant) {
            participant = {
                _id: userId,
                state: 'connecting',
                joinedAt: Date.now(),
                streamType,
                pingInfo: {}
            };
            this.participants.push(participant);
            this.participants.forEach((p) => {
                if (p._id !== userId && !this.isInitiator(p._id, userId) && !this.isInitiator(userId, p._id)) {
                    this.setInitiator(userId, p._id);
                }
            });
            return participant;
        }
        return false;
    }
    removeParticipant(userId) {
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if (participant) {
            this.participants.removeValue(participant);
            this.participants.forEach((p) => {
                if (p._id !== userId && !this.isInitiator(p._id, userId) && !this.isInitiator(userId, p._id)) {
                    this.relations.removeValue(p._id + '>' + userId);
                    this.relations.removeValue(userId + '>' + p._id);
                }
            });
            return true;
        }
        return false;
    }
    ;
    setTurnPing(userId, ping) {
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if (participant) {
            participant.pingInfo.turn = ping;
            if (ping !== 'timeout') {
                participant.pingInfo.turnLastPingDate = Date.now();
            }
            return true;
        }
        return false;
    }
    ;
    setSignalerPing(userId, ping) {
        userId = String(userId);
        const participant = this.getParticipant(userId);
        if (participant) {
            participant.pingInfo.signaler = ping;
            if (ping !== 'timeout') {
                participant.pingInfo.signalerLastPingDate = Date.now();
            }
            return true;
        }
        return false;
    }
    setInitiator(initiatorId, targetId) {
        initiatorId = String(initiatorId);
        targetId = String(targetId);
        this.relations.splice(this.relations.indexOf(initiatorId + '>' + targetId), 1);
        this.relations.splice(this.relations.indexOf(targetId + '>' + initiatorId), 1);
        this.relations.push(initiatorId + '>' + targetId);
        return this;
    }
    isInitiator(myId, otherId) {
        return this.relations.includes(String(myId) + '>' + String(otherId));
    }
}
exports.default = Conference;
