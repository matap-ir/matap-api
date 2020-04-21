"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    name: { type: String, required: true },
    address: { type: String, required: true },
    logoUrl: { type: String },
    type: { type: String, required: true }
};
exports.default = dbModel;
