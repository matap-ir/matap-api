"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phone = void 0;
var joi_1 = __importDefault(require("@hapi/joi"));
// customJoi.string().phoneNumber({ defaultCountry: 'IR', format: 'international', strict: true })
exports.default = joi_1.default;
var phone = function () {
    return joi_1.default.string();
};
exports.phone = phone;
