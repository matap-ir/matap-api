"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    requestDate: { type: Number, required: true },
    patient: { type: mongoose_1.ObjectId, required: true, ref: 'users' },
    doctor: { type: mongoose_1.ObjectId, required: true, ref: 'users' },
    state: { type: String, required: true },
    timeLine: { type: [mongoose_1.Schema.Types.Mixed], required: true, default: [] },
    due: {
        type: {
            date: {
                type: {
                    from: { type: Number, required: true },
                    to: { type: Number, required: true }
                },
                required: true
            },
            message: { type: Number, required: true }
        },
        required: false
    }
};
exports.default = dbModel;
