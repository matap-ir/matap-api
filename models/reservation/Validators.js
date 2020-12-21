"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const request = {
    _id: Joi_1.default.any().required(),
    type: Joi_1.default.string().required(),
    message: Joi_1.default.string().required().allow(''),
    date: Joi_1.default.number().required(),
    selection: Joi_1.default.array().items(Joi_1.default.object().keys({
        from: Joi_1.default.number().required(),
        to: Joi_1.default.number().required()
    })).required(),
    rejection: Joi_1.default.object().keys({
        reason: Joi_1.default.string().required().allow('')
    }).optional().allow(null)
};
const offer = {
    _id: Joi_1.default.any().required(),
    type: Joi_1.default.string().required(),
    message: Joi_1.default.string().required().allow(''),
    date: Joi_1.default.number().required(),
    offers: Joi_1.default.array().items(Joi_1.default.object().keys({
        from: Joi_1.default.number().required(),
        to: Joi_1.default.number().required()
    })).required(),
    rejection: Joi_1.default.object().keys({
        reason: Joi_1.default.string().required().allow('')
    }).optional()
};
const cancellation = {
    _id: Joi_1.default.any().required(),
    type: Joi_1.default.string().required(),
    date: Joi_1.default.number().required(),
    cancellerId: Joi_1.default.any().required(),
    reason: Joi_1.default.string().required().allow('')
};
const general = {
    _id: Joi_1.default.any().required(),
    requestDate: Joi_1.default.number().required(),
    patient: Joi_1.default.any().optional().allow(null),
    doctor: Joi_1.default.any().required(),
    state: Joi_1.default.string().required(),
    timeLine: Joi_1.default.array().items(Joi_1.default.any()).required(),
    due: Joi_1.default.object().keys({
        date: Joi_1.default.object().keys({
            from: Joi_1.default.number().required(),
            to: Joi_1.default.number().required()
        }).required(),
        message: Joi_1.default.string().required().allow('')
    }).optional(),
    type: Joi_1.default.string().required(),
    otherInfos: Joi_1.default.any().optional().allow(null)
};
exports.default = {
    general: createValidator_1.default(general),
    public: {
        post: createValidator_1.default(general),
        patch: createValidator_1.default(general)
    },
    db: {
        insert: createValidator_1.default(Object.assign(Object.assign({}, general), { _id: null })),
        update: createValidator_1.default(general)
    },
    offer: {
        public: {
            post: createValidator_1.default(Object.assign(Object.assign({}, offer), { date: null, _id: null }))
        }
    },
    request: {
        public: {
            post: createValidator_1.default(Object.assign(Object.assign({}, request), { date: null, _id: null }))
        }
    },
    cancellation: {
        public: {
            post: createValidator_1.default(Object.assign(Object.assign({}, cancellation), { _id: null, cancellerId: null, message: null }))
        }
    }
};
