"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    age: { type: Number, required: true },
    mobile: { type: String, required: true },
    service: { type: mongoose_1.ObjectId, ref: 'medical_services', required: true },
    gender: { type: String, required: true },
    request_date: { type: Number, required: true },
    details: { type: String, required: true }
};
exports.default = dbModel;
