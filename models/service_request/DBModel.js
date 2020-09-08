"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    age: { type: Number, required: true },
    mobile: { type: String, required: true },
    service: { type: mongoose_1.ObjectId, ref: 'medical_services', required: true },
    price: { type: Number, required: false },
    gender: { type: String, required: true },
    request_date: { type: Number, required: true },
    details: { type: String, required: true },
    trackingCode: { type: String, required: true, unique: true },
    status: { type: String, required: true },
    requester: { type: mongoose_1.ObjectId, ref: 'users', required: true },
    app: { type: String, required: false }
};
exports.default = dbModel;
