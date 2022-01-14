"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var fromToType = { from: String, to: String };
var ResponseTime = /** @class */ (function () {
    function ResponseTime(from, to) {
        this.from = from;
        this.to = to;
    }
    __decorate([
        mongoose_types_1.Prop({ type: fromToType, required: true })
    ], ResponseTime.prototype, "from");
    __decorate([
        mongoose_types_1.Prop({ type: fromToType, required: true })
    ], ResponseTime.prototype, "to");
    __decorate([
        mongoose_types_1.Prop({ type: mongoose_types_1.ObjectId, ref: 'healthcenters', required: false })
    ], ResponseTime.prototype, "healthCenter");
    ResponseTime = __decorate([
        mongoose_types_1.Schema()
    ], ResponseTime);
    return ResponseTime;
}());
exports["default"] = ResponseTime;
//# sourceMappingURL=ResponseTime.js.map