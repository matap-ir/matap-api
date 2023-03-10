"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("../Enums");
const mongoose_types_1 = require("../../mongoose-types");
exports.default = {
    patient: { type: mongoose_types_1.ObjectId, ref: 'users', required: true },
    doctor: { type: mongoose_types_1.ObjectId, ref: 'users', required: true },
    discount: { type: mongoose_types_1.ObjectId, ref: 'discount_coupons' },
    state: { type: String, required: true, default: Enums_1.VisitStatus.IN_QUEUE, index: true },
    initiate_date: { type: Number, required: true },
    start_date: { type: Number, index: true },
    startDateUTC: { type: String, index: true, required: false },
    end_date: { type: Number, index: true },
    conversations: [{ delivered: { type: [String], default: [] }, chat: require('../chat/DBModel').default }],
    rating: { type: require('../rating/DBModel').default, required: false },
    chatting: { type: Boolean, default: false },
    maxDurationMillisec: { type: Number, required: true },
    receipt: {
        transaction_id: { type: String, required: false },
        total: { type: Number, required: false },
        paid: { type: Number, required: false },
        doctorCut: { type: Number, required: false },
        healthCenterCut: { type: Number, required: false },
        healthCenterId: { type: mongoose_types_1.ObjectId, ref: 'healthcenters', required: false },
        discount: { type: Number, required: false },
        return_transaction_id: { type: String, required: false },
        settled: { type: Boolean, required: false, default: false },
        healthCenterSettled: { type: Boolean, required: false, default: false }
    }
};
