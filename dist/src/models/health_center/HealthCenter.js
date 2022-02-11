"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const mongoose_types_1 = require("../../mongoose-types");
let HealthCenter = class HealthCenter {
    constructor(name, address, type, percentage, priorities, shaba, priority) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.percentage = percentage;
        this.priorities = priorities;
        this.shaba = shaba;
        this.priority = priority;
    }
};
tslib_1.__decorate([
    mongoose_types_1.Prop({ require: true }),
    tslib_1.__metadata("design:type", String)
], HealthCenter.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ require: true }),
    tslib_1.__metadata("design:type", String)
], HealthCenter.prototype, "address", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], HealthCenter.prototype, "logoUrl", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], HealthCenter.prototype, "wallpaperUrl", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ require: true }),
    tslib_1.__metadata("design:type", String)
], HealthCenter.prototype, "type", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ require: true, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], HealthCenter.prototype, "percentage", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: [String], require: true, default: [] }),
    tslib_1.__metadata("design:type", Array)
], HealthCenter.prototype, "priorities", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ require: true }),
    tslib_1.__metadata("design:type", String)
], HealthCenter.prototype, "shaba", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ require: true, default: 1000000 }),
    tslib_1.__metadata("design:type", Number)
], HealthCenter.prototype, "priority", void 0);
HealthCenter = tslib_1.__decorate([
    mongoose_types_1.Schema(),
    tslib_1.__metadata("design:paramtypes", [String, String, String, Number, Array, String, Number])
], HealthCenter);
exports.default = HealthCenter;
;
