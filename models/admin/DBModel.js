"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    accesses: { type: [String], default: [] },
};
exports.default = dbModel;
