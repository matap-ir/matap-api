"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var DBModel_1 = require("../issuer/DBModel");
var mongoose_types_1 = require("../../mongoose-types");
var dbModel = {
    requestDate: { type: Number, required: true },
    issuer: DBModel_1["default"],
    doctor: { type: mongoose_types_1.ObjectId, required: true, ref: 'users' },
    state: { type: String, required: true },
    type: { type: String, required: true },
    info: { type: mongoose_1.Schema.Types.Mixed, required: true },
    trackingCode: { type: String, required: true, unique: true },
    tag: { type: String, required: true },
    due: {
        type: {
            date: {
                type: {
                    from: { type: Number, required: true },
                    to: { type: Number, required: true }
                },
                required: true
            },
            message: { type: Number, required: true }
        },
        required: false
    }
};
exports["default"] = dbModel;
//# sourceMappingURL=DBModel.js.map