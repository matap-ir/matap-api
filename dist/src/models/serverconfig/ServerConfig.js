"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Conference_1 = require("../conference/Conference");
const mongoose_types_1 = require("../../mongoose-types");
class IceServer {
}
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], IceServer.prototype, "username", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], IceServer.prototype, "credential", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: [String] }),
    tslib_1.__metadata("design:type", Array)
], IceServer.prototype, "urls", void 0);
class AndroidType {
}
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], AndroidType.prototype, "forceUpdate", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], AndroidType.prototype, "versionCode", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], AndroidType.prototype, "downloadLink", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], AndroidType.prototype, "changeLog", void 0);
class IosType {
}
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], IosType.prototype, "forceUpdate", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], IosType.prototype, "versionCode", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], IosType.prototype, "downloadLink", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], IosType.prototype, "changeLog", void 0);
let ServerConfig = class ServerConfig {
};
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: () => [IceServer] }),
    tslib_1.__metadata("design:type", Array)
], ServerConfig.prototype, "iceServers", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: () => Conference_1.MediaConstraints }),
    tslib_1.__metadata("design:type", Conference_1.MediaConstraints)
], ServerConfig.prototype, "mediaConstraints", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], ServerConfig.prototype, "forceSpeaker", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], ServerConfig.prototype, "termsandconditions", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", Array)
], ServerConfig.prototype, "excludedReservationDates", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], ServerConfig.prototype, "retryThreshold", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: {} }),
    tslib_1.__metadata("design:type", Object)
], ServerConfig.prototype, "videoMaxBitrate", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: {} }),
    tslib_1.__metadata("design:type", Object)
], ServerConfig.prototype, "audioMaxBitrate", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], ServerConfig.prototype, "iceTransportPolicy", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", Array)
], ServerConfig.prototype, "preferredCodecs", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], ServerConfig.prototype, "trickleIce", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", Number)
], ServerConfig.prototype, "conferencePingTimeout", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: () => AndroidType }),
    tslib_1.__metadata("design:type", AndroidType)
], ServerConfig.prototype, "android", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: () => IosType }),
    tslib_1.__metadata("design:type", IosType)
], ServerConfig.prototype, "ios", void 0);
ServerConfig = tslib_1.__decorate([
    mongoose_types_1.Schema()
], ServerConfig);
exports.default = ServerConfig;
