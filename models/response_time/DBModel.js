"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    from: { type: { hour: String, minute: String }, required: true },
    to: { type: { hour: String, minute: String }, required: true },
    type: { type: String, required: true }
};
exports.default = dbModel;
