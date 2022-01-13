"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_types_1 = require("../../../mongoose-types");
class Notification {
    constructor(title, body, date, sender, state, link) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.sender = sender;
        this.state = state;
        this.link = link;
    }
}
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Notification.prototype, "title", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Notification.prototype, "body", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Notification.prototype, "successCount", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Notification.prototype, "date", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'admins', required: true }),
    tslib_1.__metadata("design:type", Object)
], Notification.prototype, "sender", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Notification.prototype, "state", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Notification.prototype, "link", void 0);
exports.default = Notification;
