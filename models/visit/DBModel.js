"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Enums_1 = require("../Enums");
exports.default = {
    patient: { type: mongoose_1.ObjectId, ref: 'users', required: true, unique: true },
    doctor: { type: mongoose_1.ObjectId, ref: 'users', required: true },
    discount: { type: mongoose_1.ObjectId, ref: 'discount_coupons' },
    state: { type: String, required: true, default: Enums_1.VisitStatus.IN_QUEUE },
    initiate_date: { type: Number, required: true },
    start_date: { type: Number },
    conversations: [{ delivered: { type: [String], default: [] }, chat: require('../chat/DBModel').default }]
};
