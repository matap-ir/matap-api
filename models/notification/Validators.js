"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            title: Joi_1.default.string().optional(),
            body: Joi_1.default.string().required(),
            success: Joi_1.default.number().required(),
            fails: Joi_1.default.number().required(),
            date: Joi_1.default.number().required(),
            sender: Joi_1.default.any().required(),
            state: Joi_1.default.string().required()
        }),
        update: createValidator_1.default({
            success: Joi_1.default.number().required(),
            fails: Joi_1.default.number().required(),
            state: Joi_1.default.string().required()
        })
    },
    public: {
        post: createValidator_1.default({
            title: Joi_1.default.string().optional(),
            body: Joi_1.default.string().required()
        }),
        patch: createValidator_1.default({})
    }
};
exports.default = validator;
