"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var IssuerType = /** @class */ (function () {
    function IssuerType() {
    }
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], IssuerType.prototype, "_id");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], IssuerType.prototype, "type");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], IssuerType.prototype, "name");
    return IssuerType;
}());
var TargetType = /** @class */ (function () {
    function TargetType() {
    }
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], TargetType.prototype, "_id");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], TargetType.prototype, "name");
    return TargetType;
}());
var Transaction = /** @class */ (function () {
    function Transaction(type, amount, date) {
        this.type = type;
        this.amount = amount;
        this.date = date;
    }
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Transaction.prototype, "amount");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Transaction.prototype, "type");
    __decorate([
        mongoose_types_1.Prop()
    ], Transaction.prototype, "discount");
    __decorate([
        mongoose_types_1.Prop()
    ], Transaction.prototype, "doctorCut");
    __decorate([
        mongoose_types_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'healthcenters' })
    ], Transaction.prototype, "healthCenter");
    __decorate([
        mongoose_types_1.Prop()
    ], Transaction.prototype, "healthCenterCut");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return IssuerType; } })
    ], Transaction.prototype, "issuer");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return TargetType; } })
    ], Transaction.prototype, "target");
    __decorate([
        mongoose_types_1.Prop()
    ], Transaction.prototype, "tracking_code");
    __decorate([
        mongoose_types_1.Prop()
    ], Transaction.prototype, "visit_id");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Transaction.prototype, "date");
    __decorate([
        mongoose_types_1.Prop({ "default": '' })
    ], Transaction.prototype, "hint");
    Transaction = __decorate([
        mongoose_types_1.Schema()
    ], Transaction);
    return Transaction;
}());
exports["default"] = Transaction;
//# sourceMappingURL=Transaction.js.map