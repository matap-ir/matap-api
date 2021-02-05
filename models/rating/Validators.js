"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var createValidator_1 = __importDefault(require("../createValidator"));
var Joi_1 = __importDefault(require("../Joi"));
var validator = {
    db: {
        insert: createValidator_1.default({
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
        post: createValidator_1.default({
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
