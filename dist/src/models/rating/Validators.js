"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const createValidator_1 = tslib_1.__importDefault(require("../createValidator"));
const Joi_1 = tslib_1.__importDefault(require("../Joi"));
const validator = {
    db: {
        insert: (0, createValidator_1.default)({
            visitId: Joi_1.default.any().required(),
            service_quality: Joi_1.default.number().required(),
            video_call_satisfaction: Joi_1.default.number().required(),
            doctor_details_clearity: Joi_1.default.number().required(),
            doctor_solutions: Joi_1.default.number().required(),
            doctor_detailed_consequences: Joi_1.default.number().required(),
            environment_details: Joi_1.default.number().required(),
        })
    },
    public: {
        post: (0, createValidator_1.default)({
            visitId: Joi_1.default.any().required(),
            service_quality: Joi_1.default.number().required(),
            video_call_satisfaction: Joi_1.default.number().required(),
            doctor_details_clearity: Joi_1.default.number().required(),
            doctor_solutions: Joi_1.default.number().required(),
            doctor_detailed_consequences: Joi_1.default.number().required(),
            environment_details: Joi_1.default.number().required(),
        })
    }
};
exports.default = validator;
