"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_types_1 = require("../../../mongoose-types");
const dbModel = {
    amount: { type: Number, required: true },
    type: { type: String, required: true },
    tracking_code: { type: String },
    date: { type: Number, required: true },
    hint: { type: String, default: '' },
    discount: { type: Number, required: false },
    visit_id: { type: String, required: false },
    doctorCut: { type: Number, required: false },
    healthCenter: { type: mongoose_types_1.ObjectId, required: false, ref: 'healthcenters' },
    healthCenterCut: { type: Number, required: false },
    issuer: {
        type: { type: String, required: true },
        _id: { type: String, required: true },
        name: { type: String, required: true }
    },
    target: {
        _id: { type: String, required: true },
        name: { type: String, required: true }
    }
};
exports.default = dbModel;
