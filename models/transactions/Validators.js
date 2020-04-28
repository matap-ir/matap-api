"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            amount: Joi_1.default.number().required(),
            type: Joi_1.default.string().required(),
            issuer: Joi_1.default.string().required(),
            tracking_code: Joi_1.default.string().required()
        })
    }
};
exports.default = validator;
