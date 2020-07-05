"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    mobile: { type: String, index: true, unique: true, required: true },
    type: { type: String, require: true },
    name: { type: String, required: true },
    imageUrl: { type: String },
    code: { type: Number, index: true, unique: true, sparse: true },
    specialization: { type: mongoose_1.ObjectId, ref: 'specializations' },
    price: { type: Number },
    currency: { type: Number, default: 0, required: true },
    ready: { type: Boolean, default: false },
    sms_code: { type: String, required: false },
    fcmtoken: { type: String, required: false },
    finalizable_visits: { type: [String], default: [] },
    gender: { type: String, default: '' },
    details: {
        type: {
            city: String,
            nezam_pezeshki_code: String,
            monthlyCut: Number,
            clinics: [{ type: mongoose_1.ObjectId, ref: 'healthcenters' }],
            hospitals: [{ type: mongoose_1.ObjectId, ref: 'healthcenters' }],
            response_days: {
                type: {
                    0: String,
                    1: String,
                    2: String,
                    3: String,
                    4: String,
                    5: String,
                    6: String,
                },
                required: true,
                default: {
                    0: '',
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                }
            }
        }
    }
};
exports.default = dbModel;
