"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const mongoose_types_1 = require("../../mongoose-types");
class IssuerType {
}
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], IssuerType.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], IssuerType.prototype, "type", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], IssuerType.prototype, "name", void 0);
class TargetType {
}
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], TargetType.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], TargetType.prototype, "name", void 0);
let Transaction = class Transaction {
    constructor(type, amount, date) {
        this.type = type;
        this.amount = amount;
        this.date = date;
    }
};
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "type", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)(),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "discount", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)(),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "doctorCut", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }),
    tslib_1.__metadata("design:type", Object)
], Transaction.prototype, "healthCenter", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)(),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "healthCenterCut", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ type: () => IssuerType }),
    tslib_1.__metadata("design:type", IssuerType)
], Transaction.prototype, "issuer", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ type: () => TargetType }),
    tslib_1.__metadata("design:type", TargetType)
], Transaction.prototype, "target", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "tracking_code", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "visit_id", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Transaction.prototype, "date", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ default: '' }),
    tslib_1.__metadata("design:type", String)
], Transaction.prototype, "hint", void 0);
Transaction = tslib_1.__decorate([
    (0, mongoose_types_1.Schema)(),
    tslib_1.__metadata("design:paramtypes", [String, Number, Number])
], Transaction);
exports.default = Transaction;
