"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_types_1 = require("../../mongoose-types");
class Rating {
}
tslib_1.__decorate([
    mongoose_types_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], Rating.prototype, "visitId", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Rating.prototype, "service_quality", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Rating.prototype, "video_call_satisfaction", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Rating.prototype, "doctor_details_clearity", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Rating.prototype, "doctor_solutions", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Rating.prototype, "doctor_detailed_consequences", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], Rating.prototype, "environment_details", void 0);
exports.default = Rating;
;
