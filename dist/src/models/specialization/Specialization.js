"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
let Specialization = class Specialization {
};
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], Specialization.prototype, "name", void 0);
Specialization = tslib_1.__decorate([
    mongoose_1.Schema()
], Specialization);
exports.default = Specialization;
