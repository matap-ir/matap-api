"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_types_1 = require("../../../mongoose-types");
const dbModel = {
    title: { type: String, required: true },
    body: { type: String, required: true },
    successCount: { type: Number, required: true },
    date: { type: Number, required: true },
    sender: { type: mongoose_types_1.ObjectId, required: true, ref: 'admins' },
    state: { type: String, required: true },
    link: { type: String, required: false }
};
exports.default = dbModel;
