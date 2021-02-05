"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Joi_1 = __importDefault(require("../Joi"));
var createValidator_1 = __importDefault(require("../createValidator"));
var request = {
    _id: Joi_1.default.any().required(),
    type: Joi_1.default.string().required(),
    message: Joi_1.default.string().required().allow(''),
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
var offer = {
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
var cancellation = {
    _id: Joi_1.default.any().required(),
    type: Joi_1.default.string().required(),
    date: Joi_1.default.number().required(),
    cancellerId: Joi_1.default.any().required(),
    reason: Joi_1.default.string().required().allow('')
};
var general = {
    _id: Joi_1.default.any().required(),
    requestDate: Joi_1.default.number().required(),
    issuer: Joi_1.default.any().required(),
    doctor: Joi_1.default.any().required(),
    state: Joi_1.default.string().required(),
    timeLine: Joi_1.default.array().items(Joi_1.default.any()).required(),
    trackingCode: Joi_1.default.string().required(),
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
        insert: createValidator_1.default(__assign(__assign({}, general), { _id: null })),
        update: createValidator_1.default(general)
    },
    offer: {
        public: {
            post: createValidator_1.default(__assign(__assign({}, offer), { type: null, rejection: null, date: null, _id: null }))
        }
    },
    request: {
        public: {
            post: createValidator_1.default(__assign(__assign({}, request), { type: null, rejection: null, date: null, _id: null }))
        }
    },
    cancellation: {
        public: {
            post: createValidator_1.default(__assign(__assign({}, cancellation), { _id: null, cancellerId: null, message: null }))
        }
    }
};
