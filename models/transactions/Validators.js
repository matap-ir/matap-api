"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createValidator_1 = __importDefault(require("../createValidator"));
const Joi_1 = __importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            amount: Joi_1.default.number().required(),
            type: Joi_1.default.string().required().allow('SERVICE_REQUEST_PAYMENT', 'CHARGE_BY_GATEWAY', 'CHARGE_BY_ADMIN', 'STARTER_CHARGE', 'VISIT_PAYMENT', 'PAYROLL', 'RETURN_VISIT_PAYMENT'),
            tracking_code: Joi_1.default.string().optional().allow('').allow(null),
            date: Joi_1.default.number().required(),
            hint: Joi_1.default.string().optional().allow('').allow(null),
            visit_id: Joi_1.default.any().optional().allow(null),
            discount: Joi_1.default.number().optional().allow(null),
            doctorCut: Joi_1.default.number().optional().allow(null),
            healthCenter: Joi_1.default.any().optional().allow(null),
            healthCenterCut: Joi_1.default.number().optional(),
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
            type: Joi_1.default.string().required().allow('SERVICE_REQUEST_PAYMENT', 'CHARGE_BY_GATEWAY', 'CHARGE_BY_ADMIN', 'STARTER_CHARGE', 'VISIT_PAYMENT', 'PAYROLL'),
            tracking_code: Joi_1.default.string().optional().allow('').allow(null),
            hint: Joi_1.default.string().optional().allow('').allow(null),
        })
    }
};
exports.default = validator;
