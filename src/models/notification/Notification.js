"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var Notification = /** @class */ (function () {
    function Notification(title, body, date, sender, state, link) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.sender = sender;
        this.state = state;
        this.link = link;
    }
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Notification.prototype, "title");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Notification.prototype, "body");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Notification.prototype, "successCount");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Notification.prototype, "date");
    __decorate([
        mongoose_types_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'admins', required: true })
    ], Notification.prototype, "sender");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Notification.prototype, "state");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Notification.prototype, "link");
    return Notification;
}());
exports["default"] = Notification;
//# sourceMappingURL=Notification.js.map