"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Joi_1 = tslib_1.__importDefault(require("../../Joi"));
const createValidator_1 = tslib_1.__importDefault(require("../../createValidator"));
const validator = {
    db: {
        insert: createValidator_1.default({
            sessionId: Joi_1.default.string().required(),
            userId: Joi_1.default.string().required(),
            event: Joi_1.default.string().required(),
            data: Joi_1.default.any().optional().allow(null),
            timeStamp: Joi_1.default.number().required()
        }),
        update: createValidator_1.default({
            sessionId: Joi_1.default.string().required(),
            userId: Joi_1.default.string().required(),
            event: Joi_1.default.string().required(),
            data: Joi_1.default.any().optional().allow(null),
            timeStamp: Joi_1.default.number().required()
        })
    }
};
exports.default = validator;
