"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("../../../index");
const Enums_1 = require("../Enums");
const mongoose_1 = require("@nestjs/mongoose/");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose_types_1 = require("../../../mongoose-types");
class ConversationType {
}
tslib_1.__decorate([
    mongoose_2.Prop({ type: [String] }),
    tslib_1.__metadata("design:type", Array)
], ConversationType.prototype, "delivered", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ type: () => index_1.Chat }),
    tslib_1.__metadata("design:type", index_1.Chat)
], ConversationType.prototype, "chat", void 0);
class ReceiptType {
}
tslib_1.__decorate([
    mongoose_2.Prop(),
    tslib_1.__metadata("design:type", String)
], ReceiptType.prototype, "transaction_id", void 0);
tslib_1.__decorate([
    mongoose_2.Prop(),
    tslib_1.__metadata("design:type", Number)
], ReceiptType.prototype, "total", void 0);
tslib_1.__decorate([
    mongoose_2.Prop(),
    tslib_1.__metadata("design:type", Number)
], ReceiptType.prototype, "paid", void 0);
tslib_1.__decorate([
    mongoose_2.Prop(),
    tslib_1.__metadata("design:type", Number)
], ReceiptType.prototype, "doctorCut", void 0);
tslib_1.__decorate([
    mongoose_2.Prop(),
    tslib_1.__metadata("design:type", Number)
], ReceiptType.prototype, "discount", void 0);
tslib_1.__decorate([
    mongoose_2.Prop(),
    tslib_1.__metadata("design:type", Number)
], ReceiptType.prototype, "healthCenterCut", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }),
    tslib_1.__metadata("design:type", String)
], ReceiptType.prototype, "healthCenterId", void 0);
tslib_1.__decorate([
    mongoose_2.Prop(),
    tslib_1.__metadata("design:type", String)
], ReceiptType.prototype, "return_transaction_id", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], ReceiptType.prototype, "settled", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], ReceiptType.prototype, "healthCenterSettled", void 0);
let Visit = class Visit {
};
tslib_1.__decorate([
    mongoose_2.Prop({ type: mongoose_types_1.ObjectId, ref: 'users', required: true }),
    tslib_1.__metadata("design:type", index_1.User)
], Visit.prototype, "patient", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ type: mongoose_types_1.ObjectId, ref: 'users', required: true }),
    tslib_1.__metadata("design:type", index_1.User)
], Visit.prototype, "doctor", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ type: mongoose_types_1.ObjectId, ref: 'discount_coupons' }),
    tslib_1.__metadata("design:type", index_1.DiscountCoupon)
], Visit.prototype, "discount", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ required: true, default: Enums_1.VisitStatus.IN_QUEUE, index: true }),
    tslib_1.__metadata("design:type", String)
], Visit.prototype, "state", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Visit.prototype, "initiate_date", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ index: true }),
    tslib_1.__metadata("design:type", Number)
], Visit.prototype, "start_date", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ index: true }),
    tslib_1.__metadata("design:type", String)
], Visit.prototype, "startDateUTC", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ index: true }),
    tslib_1.__metadata("design:type", Number)
], Visit.prototype, "end_date", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ type: () => [ConversationType], default: [] }),
    tslib_1.__metadata("design:type", Array)
], Visit.prototype, "conversations", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ type: () => index_1.Rating }),
    tslib_1.__metadata("design:type", index_1.Rating)
], Visit.prototype, "rating", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Visit.prototype, "chatting", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Visit.prototype, "maxDurationMillisec", void 0);
tslib_1.__decorate([
    mongoose_2.Prop({ type: () => ReceiptType }),
    tslib_1.__metadata("design:type", ReceiptType)
], Visit.prototype, "receipt", void 0);
Visit = tslib_1.__decorate([
    mongoose_1.Schema()
], Visit);
exports.default = Visit;
