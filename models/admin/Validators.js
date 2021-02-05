"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createValidator_1 = __importDefault(require("../createValidator"));
var Joi_1 = __importDefault(require("../Joi"));
var validator = {
    db: {
        insert: createValidator_1.default({
            name: Joi_1.default.string().required(),
            type: Joi_1.default.string().required().allow('MANAGER', 'ADMIN', 'HEALTHCENTER'),
            username: Joi_1.default.string().required(),
            password: Joi_1.default.string().required(),
            privileges: require('../privileges/Validators').default.db.insert.validator.required()
        }),
        update: createValidator_1.default({
            _id: Joi_1.default.string().required(),
            username: Joi_1.default.string().required(),
            name: Joi_1.default.string().required(),
            password: Joi_1.default.string().required(),
            privileges: require('../privileges/Validators').default.db.update.validator.required()
        })
    },
    public: {
        post: createValidator_1.default({
            name: Joi_1.default.string().required(),
            type: Joi_1.default.string().required().allow('MANAGER', 'ADMIN', 'HEALTHCENTER'),
            username: Joi_1.default.string().required(),
            password: Joi_1.default.string().required(),
            privileges: require('../privileges/Validators').default.public.post.validator.required()
        }),
        patch: createValidator_1.default({
            _id: Joi_1.default.string().required(),
            name: Joi_1.default.string().required(),
            password: Joi_1.default.string().required(),
            username: Joi_1.default.string().required(),
            privileges: require('../privileges/Validators').default.public.patch.validator.required()
        })
    },
    // @ts-ignore
    signin: createValidator_1.default({
        username: Joi_1.default.string().required(),
        password: Joi_1.default.string().required()
    })
};
exports.default = validator;
