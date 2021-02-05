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
            body: Joi_1.default.string().required(),
            successCount: Joi_1.default.number().required(),
            date: Joi_1.default.number().required(),
            sender: Joi_1.default.any().required(),
            state: Joi_1.default.string().required(),
            link: Joi_1.default.string().optional().allow(null).allow('')
        }),
        update: createValidator_1.default({
            successCount: Joi_1.default.number().required(),
            state: Joi_1.default.string().required()
        })
    },
    public: {
        post: createValidator_1.default({
            title: Joi_1.default.string().required(),
            body: Joi_1.default.string().required(),
            link: Joi_1.default.string().optional().allow(null).allow('')
        }),
        patch: createValidator_1.default({})
    }
};
exports.default = validator;
