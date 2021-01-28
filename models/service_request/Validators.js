"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createValidator_1 = __importDefault(require("../createValidator"));
const Joi_1 = __importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            age: Joi_1.default.number().required(),
            service: Joi_1.default.string().required(),
            mobile: Joi_1.default.string().required(),
            request_date: Joi_1.default.number().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            trackingCode: Joi_1.default.string().required(),
            status: Joi_1.default.string().required(),
            price: Joi_1.default.number().optional().allow(null),
            requester: Joi_1.default.any().required(),
            app: Joi_1.default.string().optional().allow(null)
        }),
        update: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            mobile: Joi_1.default.string().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            trackingCode: Joi_1.default.string().required(),
            status: Joi_1.default.string().required(),
            price: Joi_1.default.number().optional().allow(null),
            requester: Joi_1.default.any().required()
        })
    },
    public: {
        post: createValidator_1.default({
            age: Joi_1.default.number().required(),
            service: Joi_1.default.string().required(),
            mobile: Joi_1.default.string().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            app: Joi_1.default.string().optional().allow(null)
        }),
        patch: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            age: Joi_1.default.number().required(),
            mobile: Joi_1.default.string().required(),
            gender: Joi_1.default.string().required().allow('male', 'female'),
            details: Joi_1.default.string().required(),
            status: Joi_1.default.string().required(),
            price: Joi_1.default.number().optional().allow(null)
        })
    }
};
exports.default = validator;
