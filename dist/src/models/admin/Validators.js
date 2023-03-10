"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: (0, createValidator_1.default)({
            name: Joi_1.default.string().required(),
            type: Joi_1.default.string().required().allow('MANAGER', 'ADMIN', 'HEALTHCENTER'),
            username: Joi_1.default.string().required(),
            password: Joi_1.default.string().required(),
            privileges: require('../privileges/Validators').default.db.insert.validator.required()
        }),
        update: (0, createValidator_1.default)({
            _id: Joi_1.default.string().required(),
            username: Joi_1.default.string().required(),
            name: Joi_1.default.string().required(),
            password: Joi_1.default.string().required(),
            privileges: require('../privileges/Validators').default.db.update.validator.required()
        })
    },
    public: {
        post: (0, createValidator_1.default)({
            name: Joi_1.default.string().required(),
            type: Joi_1.default.string().required().allow('MANAGER', 'ADMIN', 'HEALTHCENTER'),
            username: Joi_1.default.string().required(),
            password: Joi_1.default.string().required(),
            privileges: require('../privileges/Validators').default.public.post.validator.required()
        }),
        patch: (0, createValidator_1.default)({
            _id: Joi_1.default.string().required(),
            name: Joi_1.default.string().required(),
            password: Joi_1.default.string().required(),
            username: Joi_1.default.string().required(),
            privileges: require('../privileges/Validators').default.public.patch.validator.required()
        })
    },
    signin: (0, createValidator_1.default)({
        username: Joi_1.default.string().required(),
        password: Joi_1.default.string().required()
    })
};
exports.default = validator;
