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
            logoUrl: Joi_1.default.string().optional().allow(null),
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
            price: Joi_1.default.number().required()
        }),
        update: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            logoUrl: Joi_1.default.string().optional().allow(null),
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
            price: Joi_1.default.number().required()
        })
    },
    public: {
        post: createValidator_1.default({
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
            price: Joi_1.default.number().required()
        }),
        patch: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
            price: Joi_1.default.number().required()
        })
    }
};
exports.default = validator;
