"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbModel = {
    name: { type: String, required: true },
    address: { type: String, required: true },
    logoUrl: { type: String },
    wallpaperUrl: { type: String },
    type: { type: String, required: true },
    percentage: { type: Number, required: true, default: 0 },
    priorities: { type: [String], required: true, default: [] },
    shaba: { type: String, required: false },
    priority: { type: Number, required: true, default: 1000000 }
};
exports.default = dbModel;
