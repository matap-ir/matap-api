"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    amount: { type: Number, required: true },
    type: { type: String, required: true },
    tracking_code: { type: String },
    date: { type: Number, required: true },
    hint: { type: String, default: '' },
    discount: { type: Number, required: false },
    visit_id: { type: String, required: false },
    doctorCut: { type: Number, required: false },
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
