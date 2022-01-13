"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_types_1 = require("../../../mongoose-types");
const dbModel = {
    from: { type: { hour: String, minute: String }, required: true },
    to: { type: { hour: String, minute: String }, required: true },
    healthCenter: { type: mongoose_types_1.ObjectId, ref: 'healthcenters', required: false }
};
exports.default = dbModel;
