"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Joi_1 = tslib_1.__importDefault(require("./Joi"));
function createValidator(fields, options) {
    const validator = Joi_1.default.object().keys(fields);
    const newFields = Object.assign({}, fields);
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
