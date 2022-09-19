"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: (0, createValidator_1.default)({
            logoUrl: Joi_1.default.string().optional().allow(null),
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
            price: Joi_1.default.number().required()
        }),
        update: (0, createValidator_1.default)({
            _id: Joi_1.default.any().required(),
            logoUrl: Joi_1.default.string().optional().allow(null),
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
            price: Joi_1.default.number().required()
        })
    },
    public: {
        post: (0, createValidator_1.default)({
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
            price: Joi_1.default.number().required()
        }),
        patch: (0, createValidator_1.default)({
            _id: Joi_1.default.any().required(),
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
            price: Joi_1.default.number().required()
        })
    }
};
exports.default = validator;
