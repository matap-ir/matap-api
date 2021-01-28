"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const dbModel = {
    from: { type: { hour: String, minute: String }, required: true },
    to: { type: { hour: String, minute: String }, required: true },
    healthCenter: { type: index_1.ObjectId, ref: 'healthcenters', required: false }
};
exports.default = dbModel;
