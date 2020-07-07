"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    from: { type: { hour: String, minute: String }, required: false },
    to: { type: { hour: String, minute: String }, required: false },
    healthCenter: { type: mongoose_1.ObjectId, ref: 'healthcenters', required: false }
};
exports.default = dbModel;
