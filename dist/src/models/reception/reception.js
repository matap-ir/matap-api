"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_types_1 = require("../../mongoose-types");
let Reception = class Reception {
};
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: String, index: true }),
    tslib_1.__metadata("design:type", String)
], Reception.prototype, "docId", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: String, index: true, sparse: true, required: false }),
    tslib_1.__metadata("design:type", String)
], Reception.prototype, "patientId", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: [{}] }),
    tslib_1.__metadata("design:type", Array)
], Reception.prototype, "prescriptions", void 0);
Reception = tslib_1.__decorate([
    mongoose_types_1.Schema()
], Reception);
exports.default = Reception;
