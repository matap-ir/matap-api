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
    details: {
        type: {
            city: String,
            nezam_pezeshki_code: String,
            monthlyCut: Number,
            clinics: [{ type: mongoose_1.ObjectId, ref: 'health_centers' }],
            hospitals: [{ type: mongoose_1.ObjectId, ref: 'health_centers' }]
        }
    }
};
exports.default = dbModel;
