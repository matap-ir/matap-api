"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    title: { type: String, required: true },
    body: { type: String, required: true },
    success: { type: Number, required: true },
    fails: { type: Number, required: true },
    date: { type: Number, required: true },
    sender: { type: Number, required: true },
    state: { type: String, required: true }
};
exports.default = dbModel;
