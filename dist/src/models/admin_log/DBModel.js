"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_types_1 = require("../../mongoose-types");
const dbModel = {
    url: { type: String, required: true },
    path: { type: String, required: true },
    headers: { type: [String], required: false, default: [] },
    user: { type: mongoose_types_1.ObjectId, required: true, ref: 'admins' },
    description: { type: String, required: false },
    date: { type: Number, required: true },
    body: { type: Object, required: false },
    success: { type: Boolean, required: false },
    params: { type: [Object], required: false, default: [] },
    type: { type: String, required: false },
    method: { type: String, required: true }
};
exports.default = dbModel;
