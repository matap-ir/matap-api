"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var DiscountCoupon = /** @class */ (function () {
    function DiscountCoupon(title, code, amount, startDate, endDate, perUserLimit, totalUsageLimit) {
        this.title = title;
        this.code = code;
        this.amount = amount;
        this.start_date = startDate;
        this.end_date = endDate;
        this.per_user_limit = perUserLimit;
        this.total_usage_limit = totalUsageLimit;
    }
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DiscountCoupon.prototype, "title");
    __decorate([
        mongoose_types_1.Prop({ required: true, unique: true, index: true })
    ], DiscountCoupon.prototype, "code");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DiscountCoupon.prototype, "amount");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DiscountCoupon.prototype, "start_date");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DiscountCoupon.prototype, "end_date");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DiscountCoupon.prototype, "per_user_limit");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], DiscountCoupon.prototype, "total_usage_limit");
    __decorate([
        mongoose_types_1.Prop({ type: [String], required: true, "default": [] })
    ], DiscountCoupon.prototype, "usages");
    DiscountCoupon = __decorate([
        mongoose_types_1.Schema()
    ], DiscountCoupon);
    return DiscountCoupon;
}());
exports["default"] = DiscountCoupon;
//# sourceMappingURL=DiscountCoupon.js.map