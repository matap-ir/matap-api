"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = {
    patient: { type: mongoose_1.ObjectId, ref: 'user' },
    doctor: { type: mongoose_1.ObjectId, ref: 'user' },
    discount: { type: mongoose_1.ObjectId, ref: 'discount_coupons' },
    state: { type: String, required: true, default: 'IN_QUEUE' },
    start_date: { type: Number, required: true },
    conversations: [{ delivered: { type: [String], default: [] }, chat: require('../chat/DBModel').default }]
};
