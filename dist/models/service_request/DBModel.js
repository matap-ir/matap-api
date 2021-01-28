"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const dbModel = {
    age: { type: Number, required: true },
    mobile: { type: String, required: true },
    service: { type: __1.ObjectId, ref: 'medical_services', required: true },
    price: { type: Number, required: false },
    gender: { type: String, required: true },
    request_date: { type: Number, required: true },
    details: { type: String, required: true },
    trackingCode: { type: String, required: true, unique: true },
    status: { type: String, required: true },
    requester: { type: __1.ObjectId, ref: 'users', required: true },
    app: { type: String, required: false }
};
exports.default = dbModel;
