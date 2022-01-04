"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    logoUrl: { type: String },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true }
};
exports.default = dbModel;
