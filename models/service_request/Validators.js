"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            age: Joi_1.default.number().required(),
            service: Joi_1.default.string().required(),
            mobile: Joi_1.default.string().required(),
            request_date: Joi_1.default.number().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            trackingCode: Joi_1.default.string().required()
        }),
        update: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            mobile: Joi_1.default.string().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            trackingCode: Joi_1.default.string().required()
        })
    },
    public: {
        post: createValidator_1.default({
            age: Joi_1.default.number().required(),
            service: Joi_1.default.string().required(),
            mobile: Joi_1.default.string().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required()
        }),
        patch: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            age: Joi_1.default.number().required(),
            mobile: Joi_1.default.string().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            trackingCode: Joi_1.default.string().required()
        })
    }
};
exports.default = validator;
