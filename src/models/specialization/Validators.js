"use strict";
exports.__esModule = true;
var createValidator_1 = require("../createValidator");
var Joi_1 = require("../Joi");
var validator = {
    db: {
        insert: createValidator_1["default"]({
            name: Joi_1["default"].string().required()
        }),
        update: createValidator_1["default"]({
            _id: Joi_1["default"].any().required(),
            name: Joi_1["default"].string().required()
        })
    },
    public: {
        post: createValidator_1["default"]({
            name: Joi_1["default"].string().required()
        }),
        patch: createValidator_1["default"]({
            _id: Joi_1["default"].any().required(),
            name: Joi_1["default"].string().required()
        })
    }
};
exports["default"] = validator;
//# sourceMappingURL=Validators.js.map