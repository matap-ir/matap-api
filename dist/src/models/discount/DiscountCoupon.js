"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let DiscountCoupon = class DiscountCoupon {
    constructor(title, code, amount, startDate, endDate, perUserLimit, totalUsageLimit) {
        this.title = title;
        this.code = code;
        this.amount = amount;
        this.start_date = startDate;
        this.end_date = endDate;
        this.per_user_limit = perUserLimit;
        this.total_usage_limit = totalUsageLimit;
    }
};
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], DiscountCoupon.prototype, "title", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true, unique: true, index: true }),
    tslib_1.__metadata("design:type", String)
], DiscountCoupon.prototype, "code", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], DiscountCoupon.prototype, "amount", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], DiscountCoupon.prototype, "start_date", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], DiscountCoupon.prototype, "end_date", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], DiscountCoupon.prototype, "per_user_limit", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], DiscountCoupon.prototype, "total_usage_limit", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ type: [String], required: true, default: [] }),
    tslib_1.__metadata("design:type", Array)
], DiscountCoupon.prototype, "usages", void 0);
DiscountCoupon = tslib_1.__decorate([
    mongoose_1.Schema(),
    tslib_1.__metadata("design:paramtypes", [String, String, Number, Number, Number, Number, Number])
], DiscountCoupon);
exports.default = DiscountCoupon;
