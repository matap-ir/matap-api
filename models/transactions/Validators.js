"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            amount: Joi_1.default.number().required(),
            type: Joi_1.default.string().required().allow('CHARGE_BY_GATEWAY', 'CHARGE_BY_ADMIN', 'STARTER_CHARGE', 'VISIT_PAYMENT', 'PAYROLL'),
            tracking_code: Joi_1.default.string().optional(),
            date: Joi_1.default.number().required(),
            hint: Joi_1.default.string().optional(),
            issuer: Joi_1.default.object({
                type: Joi_1.default.string().required().allow('admin', 'user'),
                _id: Joi_1.default.any().required(),
                name: Joi_1.default.string().required()
            }),
            target: Joi_1.default.object({
                _id: Joi_1.default.any().required(),
                name: Joi_1.default.string().required()
            })
        })
    },
    public: {
        post: createValidator_1.default({
            amount: Joi_1.default.number().required(),
            type: Joi_1.default.string().required().allow('CHARGE_BY_GATEWAY', 'CHARGE_BY_ADMIN', 'STARTER_CHARGE', 'VISIT_PAYMENT', 'PAYROLL'),
            tracking_code: Joi_1.default.string().optional(),
            hint: Joi_1.default.string().optional(),
        })
    }
};
exports.default = validator;
