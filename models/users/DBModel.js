"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    mobile: { type: String, required: true },
    type: { type: String, require: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    imageUrl: { type: String },
    code: { type: Number, required: false }
};
exports.default = dbModel;
