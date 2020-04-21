"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            name: Joi_1.default.string().required(),
            address: Joi_1.default.string().optional(),
            logoUrl: Joi_1.default.string().optional(),
            type: Joi_1.default.string().allow('HOSPITAL', 'CLINIC')
        }),
        update: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            name: Joi_1.default.string().required(),
            address: Joi_1.default.string().optional(),
            logoUrl: Joi_1.default.string().optional(),
            type: Joi_1.default.string().allow('HOSPITAL', 'CLINIC').optional()
        })
    },
    public: {
        post: createValidator_1.default({
            name: Joi_1.default.string().required(),
            address: Joi_1.default.string().required(),
            logoUrl: Joi_1.default.string().optional(),
            type: Joi_1.default.string().allow('HOSPITAL', 'CLINIC').required()
        }),
        patch: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            name: Joi_1.default.string().required(),
            address: Joi_1.default.string().optional(),
            logoUrl: Joi_1.default.string().optional(),
            type: Joi_1.default.string().allow('HOSPITAL', 'CLINIC').optional()
        })
    }
};
exports.default = validator;
