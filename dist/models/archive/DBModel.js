"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const dbModel = {
    patient: { type: index_1.ObjectId, ref: 'users', required: true, index: true },
    doctor: { type: index_1.ObjectId, ref: 'users', required: true, index: true },
    title: { type: String, required: true },
    note: { type: String, required: true },
    fileUrl: { type: { url: String, file_size: Number, file_name: String, mediaInfo: { type: { width: Number, height: Number, duration: Number, orientation: Number }, required: false } }, required: false },
    createdAt: { type: Number, required: true },
};
exports.default = dbModel;
