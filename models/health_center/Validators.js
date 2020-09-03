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
            wallpaperUrl: Joi_1.default.string().optional(),
            logoUrl: Joi_1.default.string().optional(),
            type: Joi_1.default.string().allow('HOSPITAL', 'CLINIC'),
            percentage: Joi_1.default.number().required().min(0).max(100),
            priorities: Joi_1.default.array().items(Joi_1.default.string()).optional(),
            shaba: Joi_1.default.string().optional().allow(null).allow(''),
            priority: Joi_1.default.number().optional().allow(null)
        }),
        update: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            name: Joi_1.default.string().required(),
            address: Joi_1.default.string().optional(),
            wallpaperUrl: Joi_1.default.string().optional(),
            logoUrl: Joi_1.default.string().optional(),
            type: Joi_1.default.string().allow('HOSPITAL', 'CLINIC').optional(),
            percentage: Joi_1.default.number().required().min(0).max(100),
            priorities: Joi_1.default.array().items(Joi_1.default.string()).required(),
            shaba: Joi_1.default.string().optional().allow(null).allow(''),
            priority: Joi_1.default.number().optional().allow(null)
        })
    },
    public: {
        post: createValidator_1.default({
            name: Joi_1.default.string().required(),
            address: Joi_1.default.string().required(),
            logoUrl: Joi_1.default.string().optional(),
            type: Joi_1.default.string().allow('HOSPITAL', 'CLINIC').required(),
            percentage: Joi_1.default.number().required().min(0).max(100),
            priorities: Joi_1.default.array().items(Joi_1.default.string()).optional(),
            shaba: Joi_1.default.string().optional().allow(null).allow(''),
            priority: Joi_1.default.number().optional().allow(null)
        }),
        patch: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            name: Joi_1.default.string().required(),
            address: Joi_1.default.string().optional(),
            wallpaperUrl: Joi_1.default.string().optional(),
            logoUrl: Joi_1.default.string().optional(),
            type: Joi_1.default.string().allow('HOSPITAL', 'CLINIC').optional(),
            percentage: Joi_1.default.number().required().min(0).max(100),
            priorities: Joi_1.default.array().items(Joi_1.default.string()).optional(),
            shaba: Joi_1.default.string().optional().allow(null).allow(''),
            priority: Joi_1.default.number().optional().allow(null)
        })
    }
};
exports.default = validator;
