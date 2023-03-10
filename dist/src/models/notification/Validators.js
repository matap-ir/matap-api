"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: (0, createValidator_1.default)({
            title: Joi_1.default.string().required(),
            body: Joi_1.default.string().required(),
            successCount: Joi_1.default.number().required(),
            date: Joi_1.default.number().required(),
            sender: Joi_1.default.any().required(),
            state: Joi_1.default.string().required(),
            link: Joi_1.default.string().optional().allow(null).allow('')
        }),
        update: (0, createValidator_1.default)({
            successCount: Joi_1.default.number().required(),
            state: Joi_1.default.string().required()
        })
    },
    public: {
        post: (0, createValidator_1.default)({
            title: Joi_1.default.string().required(),
            body: Joi_1.default.string().required(),
            link: Joi_1.default.string().optional().allow(null).allow('')
        }),
        patch: (0, createValidator_1.default)({})
    }
};
exports.default = validator;
