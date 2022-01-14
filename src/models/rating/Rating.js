"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var Rating = /** @class */ (function () {
    function Rating() {
    }
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Rating.prototype, "visitId");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Rating.prototype, "service_quality");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Rating.prototype, "video_call_satisfaction");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Rating.prototype, "doctor_details_clearity");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Rating.prototype, "doctor_solutions");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Rating.prototype, "doctor_detailed_consequences");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], Rating.prototype, "environment_details");
    return Rating;
}());
exports["default"] = Rating;
;
//# sourceMappingURL=Rating.js.map