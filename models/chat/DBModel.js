"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    sender: { type: String, required: true },
    text: String,
    deliveryStatus: { type: String, required: true },
    type: { type: String, required: true },
    url: String,
    date: Date
};
exports.default = dbModel;
