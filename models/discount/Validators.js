"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createValidator_1 = __importDefault(require("../createValidator"));
var Joi_1 = __importDefault(require("../Joi"));
var validator = {
    db: {
        insert: createValidator_1.default({
            title: Joi_1.default.string().required(),
            code: Joi_1.default.string().required(),
            amount: Joi_1.default.number().required(),
            end_date: Joi_1.default.number().required(),
            per_user_limit: Joi_1.default.number().required(),
            total_usage_limit: Joi_1.default.number().required(),
            start_date: Joi_1.default.number().required()
        }),
        update: createValidator_1.default({
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
        post: createValidator_1.default({
            title: Joi_1.default.string().required(),
            code: Joi_1.default.string().required(),
            amount: Joi_1.default.number().required(),
            end_date: Joi_1.default.number().required(),
            per_user_limit: Joi_1.default.number().required(),
            start_date: Joi_1.default.number().required(),
            total_usage_limit: Joi_1.default.number().required()
        }),
        put: createValidator_1.default({
            _id: Joi_1.default.string().required(),
            title: Joi_1.default.string().required(),
            code: Joi_1.default.string().required(),
            amount: Joi_1.default.number().required(),
            end_date: Joi_1.default.number().required(),
            per_user_limit: Joi_1.default.number().required(),
            total_usage_limit: Joi_1.default.number().required()
        }),
        patch: createValidator_1.default({
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
