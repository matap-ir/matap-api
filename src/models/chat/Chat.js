"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var MediaInfoType = /** @class */ (function () {
    function MediaInfoType() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], MediaInfoType.prototype, "width");
    __decorate([
        mongoose_types_1.Prop()
    ], MediaInfoType.prototype, "height");
    __decorate([
        mongoose_types_1.Prop()
    ], MediaInfoType.prototype, "duration");
    __decorate([
        mongoose_types_1.Prop()
    ], MediaInfoType.prototype, "orientation");
    return MediaInfoType;
}());
var Chat = /** @class */ (function () {
    function Chat(text, sendStatus, type, date) {
        this.text = text;
        this.sendStatus = sendStatus;
        this.type = type;
        this.date = date;
    }
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Chat.prototype, "id");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Chat.prototype, "sender");
    __decorate([
        mongoose_types_1.Prop()
    ], Chat.prototype, "text");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Chat.prototype, "sendStatus");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Chat.prototype, "type");
    __decorate([
        mongoose_types_1.Prop()
    ], Chat.prototype, "date");
    __decorate([
        mongoose_types_1.Prop()
    ], Chat.prototype, "url");
    __decorate([
        mongoose_types_1.Prop()
    ], Chat.prototype, "file_size");
    __decorate([
        mongoose_types_1.Prop()
    ], Chat.prototype, "file_name");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return MediaInfoType; } })
    ], Chat.prototype, "mediaInfo");
    return Chat;
}());
exports["default"] = Chat;
//# sourceMappingURL=Chat.js.map