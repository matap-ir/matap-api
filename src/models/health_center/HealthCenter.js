"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var HealthCenter = /** @class */ (function () {
    function HealthCenter(name, address, type, percentage, priorities, shaba, priority) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.percentage = percentage;
        this.priorities = priorities;
        this.shaba = shaba;
        this.priority = priority;
    }
    __decorate([
        mongoose_types_1.Prop({ require: true })
    ], HealthCenter.prototype, "name");
    __decorate([
        mongoose_types_1.Prop({ require: true })
    ], HealthCenter.prototype, "address");
    __decorate([
        mongoose_types_1.Prop()
    ], HealthCenter.prototype, "logoUrl");
    __decorate([
        mongoose_types_1.Prop()
    ], HealthCenter.prototype, "wallpaperUrl");
    __decorate([
        mongoose_types_1.Prop({ require: true })
    ], HealthCenter.prototype, "type");
    __decorate([
        mongoose_types_1.Prop({ require: true, "default": 0 })
    ], HealthCenter.prototype, "percentage");
    __decorate([
        mongoose_types_1.Prop({ type: [String], require: true, "default": [] })
    ], HealthCenter.prototype, "priorities");
    __decorate([
        mongoose_types_1.Prop({ require: true })
    ], HealthCenter.prototype, "shaba");
    __decorate([
        mongoose_types_1.Prop({ require: true, "default": 1000000 })
    ], HealthCenter.prototype, "priority");
    HealthCenter = __decorate([
        mongoose_types_1.Schema()
    ], HealthCenter);
    return HealthCenter;
}());
exports["default"] = HealthCenter;
;
//# sourceMappingURL=HealthCenter.js.map