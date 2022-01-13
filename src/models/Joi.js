"use strict";
exports.__esModule = true;
exports.phone = void 0;
var joi_1 = require("@hapi/joi");
// customJoi.string().phoneNumber({ defaultCountry: 'IR', format: 'international', strict: true })
exports["default"] = joi_1["default"];
var phone = function () {
    return joi_1["default"].string();
};
exports.phone = phone;
//# sourceMappingURL=Joi.js.map