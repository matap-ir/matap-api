"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const v4_1 = tslib_1.__importDefault(require("uuid/v4"));
const generateUUID = () => {
    return v4_1.default();
};
exports.default = {
    generateUUID,
};
