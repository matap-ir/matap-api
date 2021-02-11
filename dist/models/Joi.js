"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phone = void 0;
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("@hapi/joi"));
exports.default = joi_1.default;
const phone = () => {
    return joi_1.default.string();
};
exports.phone = phone;
