"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    os: { type: String, required: false },
    fatal: { type: Boolean, required: false },
    type: { type: String, required: false },
    date: { type: Number, required: true },
    error: { type: String, required: true },
    occurrences: { type: Number, required: false, default: 0 },
    resolved: { type: Boolean, required: false, default: false },
    user: {
        type: {
            userId: { type: String, required: false },
            userType: { type: String, required: false }
        },
    },
    app: {
        type: {
            build: { type: Number, required: false },
            versionCode: { type: String, required: false }
        }
    },
    device: {
        type: {
            manufacturer: { type: String, required: false },
            model: { type: String, required: false }
        }
    },
};
exports.default = dbModel;
