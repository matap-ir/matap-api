"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var Conference_1 = require("../conference/Conference");
var mongoose_types_1 = require("../../mongoose-types");
var IceServer = /** @class */ (function () {
    function IceServer() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], IceServer.prototype, "username");
    __decorate([
        mongoose_types_1.Prop()
    ], IceServer.prototype, "credential");
    __decorate([
        mongoose_types_1.Prop({ type: [String] })
    ], IceServer.prototype, "urls");
    return IceServer;
}());
var AndroidType = /** @class */ (function () {
    function AndroidType() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], AndroidType.prototype, "forceUpdate");
    __decorate([
        mongoose_types_1.Prop()
    ], AndroidType.prototype, "versionCode");
    __decorate([
        mongoose_types_1.Prop()
    ], AndroidType.prototype, "downloadLink");
    __decorate([
        mongoose_types_1.Prop()
    ], AndroidType.prototype, "changeLog");
    return AndroidType;
}());
var IosType = /** @class */ (function () {
    function IosType() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], IosType.prototype, "forceUpdate");
    __decorate([
        mongoose_types_1.Prop()
    ], IosType.prototype, "versionCode");
    __decorate([
        mongoose_types_1.Prop()
    ], IosType.prototype, "downloadLink");
    __decorate([
        mongoose_types_1.Prop()
    ], IosType.prototype, "changeLog");
    return IosType;
}());
var ServerConfig = /** @class */ (function () {
    function ServerConfig() {
    }
    __decorate([
        mongoose_types_1.Prop({ type: function () { return [IceServer]; } })
    ], ServerConfig.prototype, "iceServers");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return Conference_1.MediaConstraints; } })
    ], ServerConfig.prototype, "mediaConstraints");
    __decorate([
        mongoose_types_1.Prop()
    ], ServerConfig.prototype, "forceSpeaker");
    __decorate([
        mongoose_types_1.Prop()
    ], ServerConfig.prototype, "termsandconditions");
    __decorate([
        mongoose_types_1.Prop()
    ], ServerConfig.prototype, "excludedReservationDates");
    __decorate([
        mongoose_types_1.Prop()
    ], ServerConfig.prototype, "retryThreshold");
    __decorate([
        mongoose_types_1.Prop({ type: {} })
    ], ServerConfig.prototype, "videoMaxBitrate");
    __decorate([
        mongoose_types_1.Prop({ type: {} })
    ], ServerConfig.prototype, "audioMaxBitrate");
    __decorate([
        mongoose_types_1.Prop()
    ], ServerConfig.prototype, "iceTransportPolicy");
    __decorate([
        mongoose_types_1.Prop()
    ], ServerConfig.prototype, "preferredCodecs");
    __decorate([
        mongoose_types_1.Prop()
    ], ServerConfig.prototype, "trickleIce");
    __decorate([
        mongoose_types_1.Prop()
    ], ServerConfig.prototype, "conferencePingTimeout");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return AndroidType; } })
    ], ServerConfig.prototype, "android");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return IosType; } })
    ], ServerConfig.prototype, "ios");
    ServerConfig = __decorate([
        mongoose_types_1.Schema()
    ], ServerConfig);
    return ServerConfig;
}());
exports["default"] = ServerConfig;
//# sourceMappingURL=ServerConfig.js.map