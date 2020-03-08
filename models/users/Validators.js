"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importStar(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            mobile: Joi_1.phone(),
            type: Joi_1.default.string().required().allow('PATIENT', 'DOCTOR'),
            first_name: Joi_1.default.string().required(),
            last_name: Joi_1.default.string().required(),
            code: Joi_1.default.number().optional()
        }),
        update: createValidator_1.default({
            _id: Joi_1.default.string().required(),
            mobile: Joi_1.phone(),
            type: Joi_1.default.string().required().allow('PATIENT', 'DOCTOR'),
            first_name: Joi_1.default.string().required(),
            last_name: Joi_1.default.string().required(),
            code: Joi_1.default.number().optional(),
        })
    },
    public: {
        post: createValidator_1.default({
            mobile: Joi_1.phone(),
            first_name: Joi_1.default.string().required(),
            last_name: Joi_1.default.string().required()
        }),
        put: null,
        patch: null
    },
    signin: createValidator_1.default({
        mobile: Joi_1.default.string().required()
    })
};
exports.default = validator;
