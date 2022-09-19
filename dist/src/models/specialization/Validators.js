"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: (0, createValidator_1.default)({
            name: Joi_1.default.string().required(),
            parentSpecs: Joi_1.default.array().items(Joi_1.default.string()).required()
        }),
        update: (0, createValidator_1.default)({
            _id: Joi_1.default.any().required(),
            name: Joi_1.default.string().required(),
            parentSpecs: Joi_1.default.array().items(Joi_1.default.string()).required()
        })
    },
    public: {
        post: (0, createValidator_1.default)({
            name: Joi_1.default.string().required(),
            parentSpecs: Joi_1.default.array().items(Joi_1.default.string()).required()
        }),
        patch: (0, createValidator_1.default)({
            _id: Joi_1.default.any().required(),
            name: Joi_1.default.string().required(),
            parentSpecs: Joi_1.default.array().items(Joi_1.default.string()).required()
        })
    }
};
exports.default = validator;
