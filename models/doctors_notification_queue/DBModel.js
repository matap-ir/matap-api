"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    doctorId: { type: String, required: true },
    patientsInQueue: { type: [String], required: true, default: [] }
};
exports.default = dbModel;
