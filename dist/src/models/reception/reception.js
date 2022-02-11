"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_types_1 = require("../../mongoose-types");
const User_1 = tslib_1.__importDefault(require("../users/User"));
let Reception = class Reception {
};
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: [{ type: mongoose_types_1.ObjectId, ref: 'users' }] }),
    tslib_1.__metadata("design:type", User_1.default)
], Reception.prototype, "doctor", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: [{ type: mongoose_types_1.ObjectId, ref: 'users' }] }),
    tslib_1.__metadata("design:type", User_1.default)
], Reception.prototype, "patient", void 0);
Reception = tslib_1.__decorate([
    mongoose_types_1.Schema()
], Reception);
exports.default = Reception;
