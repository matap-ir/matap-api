"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var MedicalService = /** @class */ (function () {
    function MedicalService(title, subTitle, details, price) {
        this.title = title;
        this.subTitle = subTitle;
        this.details = details;
        this.price = price;
    }
    __decorate([
        mongoose_types_1.Prop()
    ], MedicalService.prototype, "logoUrl");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], MedicalService.prototype, "title");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], MedicalService.prototype, "subTitle");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], MedicalService.prototype, "details");
    __decorate([
        mongoose_types_1.Prop({ required: true })
    ], MedicalService.prototype, "price");
    MedicalService = __decorate([
        mongoose_types_1.Schema()
    ], MedicalService);
    return MedicalService;
}());
exports["default"] = MedicalService;
//# sourceMappingURL=MedicalService.js.map