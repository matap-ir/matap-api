"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    amount: { type: Number, required: true },
    type: { type: String, required: true },
    issuer: { type: String, required: true },
    tracking_code: { type: String, required: true }
};
exports.default = dbModel;
