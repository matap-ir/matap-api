"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MediaConstraints = void 0;
var javascript_dev_kit_1 = require("javascript-dev-kit");
var mongoose_types_1 = require("../../mongoose-types");
var MediaConstraints = /** @class */ (function () {
    function MediaConstraints() {
    }
    __decorate([
        mongoose_types_1.Prop({ type: {} })
    ], MediaConstraints.prototype, "video");
    __decorate([
        mongoose_types_1.Prop({ type: {} })
    ], MediaConstraints.prototype, "audio");
    return MediaConstraints;
}());
exports.MediaConstraints = MediaConstraints;
var Conference = /** @class */ (function () {
    function Conference(visitId, host, type, videoCallVersion, config, initiator, receiver) {
        this.events = [];
        this.id = String(javascript_dev_kit_1["default"].generateUUID());
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
    __decorate([
        mongoose_types_1.Prop({ required: true, index: true, unique: true })
    ], Conference.prototype, "id");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Conference.prototype, "host");
    __decorate([
        mongoose_types_1.Prop({ required: true, index: true })
    ], Conference.prototype, "visitId");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Conference.prototype, "createdAt");
    __decorate([
        mongoose_types_1.Prop()
    ], Conference.prototype, "endedAt");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Conference.prototype, "type");
    __decorate([
        mongoose_types_1.Prop({ type: {}, required: true })
    ], Conference.prototype, "initiator");
    __decorate([
        mongoose_types_1.Prop({ type: {}, required: true })
    ], Conference.prototype, "receiver");
    __decorate([
        mongoose_types_1.Prop({ type: {}, required: true })
    ], Conference.prototype, "iceServers");
    __decorate([
        mongoose_types_1.Prop({ type: {}, required: true })
    ], Conference.prototype, "mediaConstraints");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Conference.prototype, "videoCallVersion");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Conference.prototype, "retryThreshold");
    __decorate([
        mongoose_types_1.Prop({ required: true, index: true })
    ], Conference.prototype, "state");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Conference.prototype, "iceTransportPolicy");
    __decorate([
        mongoose_types_1.Prop({ type: {} })
    ], Conference.prototype, "videoMaxBitrate");
    __decorate([
        mongoose_types_1.Prop({ type: {} })
    ], Conference.prototype, "audioMaxBitrate");
    __decorate([
        mongoose_types_1.Prop({ type: {}, required: true })
    ], Conference.prototype, "preferredCodecs");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Conference.prototype, "trickleIce");
    __decorate([
        mongoose_types_1.Prop()
    ], Conference.prototype, "pingTimeout");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Conference.prototype, "forceSpeaker");
    __decorate([
        mongoose_types_1.Prop({ type: {}, required: true })
    ], Conference.prototype, "events");
    Conference = __decorate([
        mongoose_types_1.Schema()
    ], Conference);
    return Conference;
}());
exports["default"] = Conference;
//# sourceMappingURL=Conference.js.map