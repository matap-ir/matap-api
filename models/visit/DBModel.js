"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Enums_1 = require("../Enums");
exports.default = {
    patient: { type: mongoose_1.ObjectId, ref: 'users', required: true },
    doctor: { type: mongoose_1.ObjectId, ref: 'users', required: true },
    discount: { type: mongoose_1.ObjectId, ref: 'discount_coupons' },
    state: { type: String, required: true, default: Enums_1.VisitStatus.IN_QUEUE },
    initiate_date: { type: Number, required: true },
    start_date: { type: Number },
    end_date: { type: Number },
    duration_limit: { type: Number, required: true, default: 0 },
    conversations: [{ delivered: { type: [String], default: [] }, chat: require('../chat/DBModel').default }],
    rating: { type: require('../rating/DBModel').default, required: false },
    chatting: { type: Boolean, required: true },
    receipt: {
        transaction_id: { type: String, required: false },
        total: { type: Number, required: false },
        paid: { type: Number, required: false },
        discount: { type: Number, required: false },
        return_transaction_id: { type: String, required: false }
    }
};
