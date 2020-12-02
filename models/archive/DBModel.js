"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    patient: { type: mongoose_1.ObjectId, ref: 'users', required: true, index: true },
    doctor: { type: mongoose_1.ObjectId, ref: 'users', required: true, index: true },
    note: { type: String, required: true },
    attachments: { type: [String], required: true, default: [] },
    createdAt: { type: Number, required: true },
};
exports.default = dbModel;
