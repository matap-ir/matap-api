"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_types_1 = require("../../mongoose-types");
let Specialization = class Specialization {
};
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Specialization.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_types_1.Prop)({ type: [{ type: mongoose_types_1.ObjectId, ref: 'specializations' }], default: [] }),
    tslib_1.__metadata("design:type", Array)
], Specialization.prototype, "parentSpecs", void 0);
Specialization = tslib_1.__decorate([
    (0, mongoose_types_1.Schema)()
], Specialization);
exports.default = Specialization;
