"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: createValidator_1.default({
            name: Joi_1.default.string().required(),
            price: Joi_1.default.number().required(),
            monthlyCut: Joi_1.default.number().required(),
            doctorCut: Joi_1.default.number().required()
        }),
        update: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            name: Joi_1.default.string().required(),
            price: Joi_1.default.number().required(),
            monthlyCut: Joi_1.default.number().required(),
            doctorCut: Joi_1.default.number().required()
        })
    },
    public: {
        post: createValidator_1.default({
            name: Joi_1.default.string().required(),
            price: Joi_1.default.number().required(),
            monthlyCut: Joi_1.default.number().required(),
            doctorCut: Joi_1.default.number().required()
        }),
        patch: createValidator_1.default({
            _id: Joi_1.default.any().required(),
            name: Joi_1.default.string().required(),
            price: Joi_1.default.number().required(),
            monthlyCut: Joi_1.default.number().required(),
            doctorCut: Joi_1.default.number().required()
        })
    }
};
exports.default = validator;
