"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const joi_1 = tslib_1.__importDefault(require("joi"));
const general = joi_1.default.alternatives().try(joi_1.default.object().keys({
    type: joi_1.default.string().required(),
    user: joi_1.default.any().required()
}), joi_1.default.object().keys({
    type: joi_1.default.string().required(),
    admin: joi_1.default.any().required()
}));
exports.default = {
    general
};
