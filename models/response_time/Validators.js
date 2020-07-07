"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const general = createValidator_1.default({
    from: Joi_1.default.object().keys({
        hour: Joi_1.default.string().required(),
        minute: Joi_1.default.string().required(),
    }).required(),
    to: Joi_1.default.object().keys({
        hour: Joi_1.default.string().required(),
        minute: Joi_1.default.string().required(),
    }).required(),
    type: Joi_1.default.string().required().allow('healthcenter', 'self'),
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
