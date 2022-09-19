"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_types_1 = require("../../mongoose-types");
const fromToType = { from: String, to: String };
let ResponseTime = class ResponseTime {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
};
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ type: fromToType, required: true }),
    tslib_1.__metadata("design:type", Object)
], ResponseTime.prototype, "from", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ type: fromToType, required: true }),
    tslib_1.__metadata("design:type", Object)
], ResponseTime.prototype, "to", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ type: mongoose_types_1.ObjectId, ref: 'healthcenters', required: false }),
    tslib_1.__metadata("design:type", Object)
], ResponseTime.prototype, "healthCenter", void 0);
ResponseTime = tslib_1.__decorate([
    (0, mongoose_types_1.Schema)(),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], ResponseTime);
exports.default = ResponseTime;
