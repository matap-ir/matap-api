"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let MedicalService = class MedicalService {
    constructor(title, subTitle, details, price) {
        this.title = title;
        this.subTitle = subTitle;
        this.details = details;
        this.price = price;
    }
};
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], MedicalService.prototype, "logoUrl", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], MedicalService.prototype, "title", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], MedicalService.prototype, "subTitle", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", String)
], MedicalService.prototype, "details", void 0);
tslib_1.__decorate([
    mongoose_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Number)
], MedicalService.prototype, "price", void 0);
MedicalService = tslib_1.__decorate([
    mongoose_1.Schema(),
    tslib_1.__metadata("design:paramtypes", [String, String, String, Number])
], MedicalService);
exports.default = MedicalService;
