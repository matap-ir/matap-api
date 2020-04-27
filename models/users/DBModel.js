"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    mobile: { type: String, required: true },
    type: { type: String, require: true },
    name: { type: String, required: true },
    imageUrl: { type: String },
    code: { type: Number },
    specialization: { type: mongoose_1.ObjectId, ref: 'specializations' },
    price: { type: Number },
    currency: { type: Number, default: 0, required: true },
    ready: { type: Boolean, default: false },
    details: {
        type: {
            city: String,
            nezam_pezeshki_code: String,
            monthlyCut: Number,
            clinics: [{ type: mongoose_1.ObjectId, ref: 'healthcenters' }],
            hospitals: [{ type: mongoose_1.ObjectId, ref: 'healthcenters' }]
        }
    }
};
exports.default = dbModel;
