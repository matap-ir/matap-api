"use strict";
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var dbModel = {
    from: { type: { hour: String, minute: String }, required: true },
    to: { type: { hour: String, minute: String }, required: true },
    healthCenter: { type: mongoose_types_1.ObjectId, ref: 'healthcenters', required: false }
};
exports["default"] = dbModel;
//# sourceMappingURL=DBModel.js.map