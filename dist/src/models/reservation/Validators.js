"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const request = {
    _id: Joi_1.default.any().required(),
    type: Joi_1.default.string().required(),
    message: Joi_1.default.string().optional().allow(null),
    date: Joi_1.default.number().required(),
    extras: Joi_1.default.object().keys({
        for: Joi_1.default.string().allow('self', 'other'),
        name: Joi_1.default.string().required(),
        mobile: Joi_1.default.string().required(),
        age: Joi_1.default.number().required(),
        gender: Joi_1.default.string().required().allow('male', 'female'),
        nationalCode: Joi_1.default.string().required(),
        attendReason: Joi_1.default.string().required().allow('')
    }).required(),
    selection: Joi_1.default.array().items(Joi_1.default.object().keys({
        from: Joi_1.default.number().required(),
        to: Joi_1.default.number().required()
    })).required(),
    rejection: Joi_1.default.object().keys({
        reason: Joi_1.default.string().required().allow('')
    }).optional().allow(null)
};
const general = {
    _id: Joi_1.default.any().required(),
    requestDate: Joi_1.default.number().required(),
    issuer: Joi_1.default.any().required(),
    doctor: Joi_1.default.any().required(),
    state: Joi_1.default.string().required(),
    type: Joi_1.default.string().required(),
    trackingCode: Joi_1.default.string().required(),
    due: Joi_1.default.object().keys({
        date: Joi_1.default.object().keys({
            from: Joi_1.default.number().required(),
            to: Joi_1.default.number().required()
        }).required(),
        message: Joi_1.default.string().optional().allow(null)
    }).optional(),
    info: Joi_1.default.any().required(),
    tag: Joi_1.default.string().required()
};
exports.default = {
    general: (0, createValidator_1.default)(general),
    public: {
        post: (0, createValidator_1.default)(general),
        patch: (0, createValidator_1.default)(general)
    },
    db: {
        insert: (0, createValidator_1.default)(Object.assign(Object.assign({}, general), { _id: null })),
        update: (0, createValidator_1.default)(general)
    },
    request: {
        public: {
            post: (0, createValidator_1.default)(Object.assign(Object.assign({}, request), { type: null, rejection: null, date: null, _id: null }))
        }
    }
};
