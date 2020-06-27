"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            logoUrl: Joi_1.default.string().optional().allow(null),
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
        }),
        update: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            logoUrl: Joi_1.default.string().optional().allow(null),
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
        })
    },
    public: {
        post: createValidator_1.default({
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
        }),
        patch: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            title: Joi_1.default.string().required(),
            subTitle: Joi_1.default.string().required(),
            details: Joi_1.default.string().required(),
        })
    }
};
exports.default = validator;