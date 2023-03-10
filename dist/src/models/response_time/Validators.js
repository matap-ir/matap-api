"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const general = (0, createValidator_1.default)({
    from: Joi_1.default.object().keys({
        hour: Joi_1.default.string().required(),
        minute: Joi_1.default.string().required(),
    }),
    to: Joi_1.default.object().keys({
        hour: Joi_1.default.string().required(),
        minute: Joi_1.default.string().required(),
    }),
    healthCenter: Joi_1.default.any().optional().allow(null),
});
const validator = {
    db: {
        insert: general,
        update: general
    },
    public: {
        post: general,
        patch: general
    }
};
exports.default = validator;
