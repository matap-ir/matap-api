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
exports.__esModule = true;
var Joi_1 = require("./Joi");
function createValidator(fields, options) {
    var validator = Joi_1["default"].object().keys(fields);
    var newFields = __assign({}, fields);
    Object.keys(newFields).forEach(function (key) {
        newFields[key] = { validator: newFields[key], metadata: {} };
    });
    validator.options = options;
    return {
        fields: newFields,
        validator: validator,
    };
}
exports["default"] = createValidator;
//# sourceMappingURL=createValidator.js.map