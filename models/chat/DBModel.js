"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    sender: { type: String, required: true },
    text: String,
    sendStatus: { type: String, required: true },
    receiveStatus: { type: String },
    type: { type: String, required: true },
    url: String,
    date: Date,
    file_size: Number
};
exports.default = dbModel;
