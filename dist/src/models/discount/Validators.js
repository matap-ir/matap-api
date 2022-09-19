"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: (0, createValidator_1.default)({
            title: Joi_1.default.string().required(),
            code: Joi_1.default.string().required(),
            amount: Joi_1.default.number().required(),
            end_date: Joi_1.default.number().required(),
            per_user_limit: Joi_1.default.number().required(),
            total_usage_limit: Joi_1.default.number().required(),
            start_date: Joi_1.default.number().required()
        }),
        update: (0, createValidator_1.default)({
            _id: Joi_1.default.string().required(),
            title: Joi_1.default.string().required(),
            code: Joi_1.default.string().required(),
            amount: Joi_1.default.number().required(),
            end_date: Joi_1.default.number().required(),
            per_user_limit: Joi_1.default.number().required(),
            total_usage_limit: Joi_1.default.number().required(),
            usages: Joi_1.default.array().items(Joi_1.default.string())
        })
    },
    public: {
        post: (0, createValidator_1.default)({
            title: Joi_1.default.string().required(),
            code: Joi_1.default.string().required(),
            amount: Joi_1.default.number().required(),
            end_date: Joi_1.default.number().required(),
            per_user_limit: Joi_1.default.number().required(),
            start_date: Joi_1.default.number().required(),
            total_usage_limit: Joi_1.default.number().required()
        }),
        put: (0, createValidator_1.default)({
            _id: Joi_1.default.string().required(),
            title: Joi_1.default.string().required(),
            code: Joi_1.default.string().required(),
            amount: Joi_1.default.number().required(),
            end_date: Joi_1.default.number().required(),
            per_user_limit: Joi_1.default.number().required(),
            total_usage_limit: Joi_1.default.number().required()
        }),
        patch: (0, createValidator_1.default)({
            _id: Joi_1.default.string().required(),
            title: Joi_1.default.string().required(),
            code: Joi_1.default.string().required(),
            amount: Joi_1.default.number().required(),
            end_date: Joi_1.default.number().required(),
            per_user_limit: Joi_1.default.number().required(),
            total_usage_limit: Joi_1.default.number().required()
        })
    }
};
exports.default = validator;
