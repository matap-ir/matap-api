"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("@hapi/joi"));
var general = joi_1.default.alternatives().try(joi_1.default.object().keys({
    type: joi_1.default.string().required(),
    user: joi_1.default.any().required()
}), joi_1.default.object().keys({
    type: joi_1.default.string().required(),
    admin: joi_1.default.any().required()
}));
exports.default = {
    general: general
};
