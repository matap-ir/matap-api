"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    title: { type: String, required: true },
    body: { type: String, required: true },
    successCount: { type: Number, required: true },
    date: { type: Number, required: true },
    sender: { type: mongoose_1.ObjectId, required: true, ref: 'admins' },
    state: { type: String, required: true }
};
exports.default = dbModel;
