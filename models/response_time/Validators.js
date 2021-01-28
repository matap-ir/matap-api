"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createValidator_1 = __importDefault(require("../createValidator"));
const Joi_1 = __importDefault(require("../Joi"));
const general = createValidator_1.default({
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
