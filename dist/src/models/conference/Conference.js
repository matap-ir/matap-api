"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaConstraints = void 0;
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const javascript_dev_kit_1 = tslib_1.__importDefault(require("javascript-dev-kit"));
const ServerConfig_1 = tslib_1.__importDefault(require("../serverconfig/ServerConfig"));
const mongoose_1 = require("@nestjs/mongoose");
class MediaConstraints {
}
tslib_1.__decorate([
    mongoose_1.Prop({ type: {} }),
    tslib_1.__metadata("design:type", Object)
], MediaConstraints.prototype, "video", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: {} }),
    tslib_1.__metadata("design:type", Object)
], MediaConstraints.prototype, "audio", void 0);
exports.MediaConstraints = MediaConstraints;
let Conference = class Conference {
    constructor(visitId, host, type, videoCallVersion, config, initiator, receiver) {
        this.events = [];
        this.id = String(javascript_dev_kit_1.default.generateUUID());
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
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, index: true, unique: true }),
    tslib_1.__metadata("design:type", String)
], Conference.prototype, "id", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Conference.prototype, "host", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, index: true }),
    tslib_1.__metadata("design:type", String)
], Conference.prototype, "visitId", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Conference.prototype, "createdAt", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], Conference.prototype, "endedAt", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Conference.prototype, "type", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: {}, required: true }),
    tslib_1.__metadata("design:type", Object)
], Conference.prototype, "initiator", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: {}, required: true }),
    tslib_1.__metadata("design:type", Object)
], Conference.prototype, "receiver", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: {}, required: true }),
    tslib_1.__metadata("design:type", Array)
], Conference.prototype, "iceServers", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: {}, required: true }),
    tslib_1.__metadata("design:type", MediaConstraints)
], Conference.prototype, "mediaConstraints", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Conference.prototype, "videoCallVersion", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Conference.prototype, "retryThreshold", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, index: true }),
    tslib_1.__metadata("design:type", String)
], Conference.prototype, "state", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Conference.prototype, "iceTransportPolicy", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: {} }),
    tslib_1.__metadata("design:type", Object)
], Conference.prototype, "videoMaxBitrate", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: {} }),
    tslib_1.__metadata("design:type", Object)
], Conference.prototype, "audioMaxBitrate", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: {}, required: true }),
    tslib_1.__metadata("design:type", Array)
], Conference.prototype, "preferredCodecs", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Boolean)
], Conference.prototype, "trickleIce", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], Conference.prototype, "pingTimeout", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Boolean)
], Conference.prototype, "forceSpeaker", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: {}, required: true }),
    tslib_1.__metadata("design:type", Array)
], Conference.prototype, "events", void 0);
Conference = tslib_1.__decorate([
    mongoose_1.Schema(),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String, ServerConfig_1.default, Object, Object])
], Conference);
exports.default = Conference;
