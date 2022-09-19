"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: (0, createValidator_1.default)({
            age: Joi_1.default.number().required(),
            service: Joi_1.default.string().required(),
            mobile: Joi_1.default.string().required(),
            request_date: Joi_1.default.number().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            trackingCode: Joi_1.default.string().required(),
            status: Joi_1.default.string().required(),
            price: Joi_1.default.number().optional().allow(null),
            requester: Joi_1.default.any().required(),
            app: Joi_1.default.string().optional().allow(null)
        }),
        update: (0, createValidator_1.default)({
            _id: Joi_1.default.any().required(),
            mobile: Joi_1.default.string().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            trackingCode: Joi_1.default.string().required(),
            status: Joi_1.default.string().required(),
            price: Joi_1.default.number().optional().allow(null),
            requester: Joi_1.default.any().required()
        })
    },
    public: {
        post: (0, createValidator_1.default)({
            age: Joi_1.default.number().required(),
            service: Joi_1.default.string().required(),
            mobile: Joi_1.default.string().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            app: Joi_1.default.string().optional().allow(null)
        }),
        patch: (0, createValidator_1.default)({
            _id: Joi_1.default.any().required(),
            age: Joi_1.default.number().required(),
            mobile: Joi_1.default.string().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            status: Joi_1.default.string().required(),
            price: Joi_1.default.number().optional().allow(null)
        })
    }
};
exports.default = validator;
