"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi_1 = __importDefault(require("./Joi"));
function createValidator(fields, options) {
    const validator = Joi_1.default.object().keys(fields);
    const newFields = { ...fields };
    Object.keys(newFields).forEach((key) => {
        newFields[key] = { validator: newFields[key], metadata: {} };
    });
    validator.options = options;
    return {
        fields: newFields,
        validator,
    };
}
exports.default = createValidator;
