"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var index_1 = require("../../../index");
var Enums_1 = require("../Enums");
var mongoose_types_1 = require("../../mongoose-types");
var ConversationType = /** @class */ (function () {
    function ConversationType() {
    }
    __decorate([
        mongoose_types_1.Prop({ type: [String] })
    ], ConversationType.prototype, "delivered");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return index_1.Chat; } })
    ], ConversationType.prototype, "chat");
    return ConversationType;
}());
var ReceiptType = /** @class */ (function () {
    function ReceiptType() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], ReceiptType.prototype, "transaction_id");
    __decorate([
        mongoose_types_1.Prop()
    ], ReceiptType.prototype, "total");
    __decorate([
        mongoose_types_1.Prop()
    ], ReceiptType.prototype, "paid");
    __decorate([
        mongoose_types_1.Prop()
    ], ReceiptType.prototype, "doctorCut");
    __decorate([
        mongoose_types_1.Prop()
    ], ReceiptType.prototype, "discount");
    __decorate([
        mongoose_types_1.Prop()
    ], ReceiptType.prototype, "healthCenterCut");
    __decorate([
        mongoose_types_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'healthcenters' })
    ], ReceiptType.prototype, "healthCenterId");
    __decorate([
        mongoose_types_1.Prop()
    ], ReceiptType.prototype, "return_transaction_id");
    __decorate([
        mongoose_types_1.Prop({ "default": false })
    ], ReceiptType.prototype, "settled");
    __decorate([
        mongoose_types_1.Prop({ "default": false })
    ], ReceiptType.prototype, "healthCenterSettled");
    return ReceiptType;
}());
var Visit = /** @class */ (function () {
    function Visit() {
    }
    __decorate([
        mongoose_types_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'users', required: true })
    ], Visit.prototype, "patient");
    __decorate([
        mongoose_types_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'users', required: true })
    ], Visit.prototype, "doctor");
    __decorate([
        mongoose_types_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'discount_coupons' })
    ], Visit.prototype, "discount");
    __decorate([
        mongoose_types_1.Prop({ required: true, "default": Enums_1.VisitStatus.IN_QUEUE, index: true })
    ], Visit.prototype, "state");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Visit.prototype, "initiate_date");
    __decorate([
        mongoose_types_1.Prop({ index: true })
    ], Visit.prototype, "start_date");
    __decorate([
        mongoose_types_1.Prop({ index: true })
    ], Visit.prototype, "startDateUTC");
    __decorate([
        mongoose_types_1.Prop({ index: true })
    ], Visit.prototype, "end_date");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return [ConversationType]; }, "default": [] })
    ], Visit.prototype, "conversations");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return index_1.Rating; } })
    ], Visit.prototype, "rating");
    __decorate([
        mongoose_types_1.Prop({ "default": false })
    ], Visit.prototype, "chatting");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Visit.prototype, "maxDurationMillisec");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return ReceiptType; } })
    ], Visit.prototype, "receipt");
    Visit = __decorate([
        mongoose_types_1.Schema({})
    ], Visit);
    return Visit;
}());
exports["default"] = Visit;
//# sourceMappingURL=Visit.js.map