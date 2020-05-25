"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    mobile: { type: String, required: true },
    type: { type: String, require: true },
    name: { type: String, required: true },
    imageUrl: { type: String },
    code: { type: Number, unique: true, sparse: true },
    specialization: { type: mongoose_1.ObjectId, ref: 'specializations' },
    price: { type: Number },
    currency: { type: Number, default: 0, required: true },
    ready: { type: Boolean, default: false },
    sms_code: { type: String, required: false },
    fcmtoken: { type: String, required: false },
    finalizable_visits: { type: [String], default: [] },
    details: {
        type: {
            city: String,
            nezam_pezeshki_code: String,
            monthlyCut: Number,
            clinics: [{ type: mongoose_1.ObjectId, ref: 'healthcenters' }],
            hospitals: [{ type: mongoose_1.ObjectId, ref: 'healthcenters' }],
            response_days: { type: String, required: false }
        }
    }
};
exports.default = dbModel;
