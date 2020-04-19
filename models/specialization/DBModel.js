"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    monthlyCut: { type: Number, required: true },
    doctorCut: { type: Number, required: true },
};
exports.default = dbModel;
