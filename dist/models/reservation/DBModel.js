"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const DBModel_1 = tslib_1.__importDefault(require("../issuer/DBModel"));
const index_1 = require("../../index");
const dbModel = {
    requestDate: { type: Number, required: true },
    issuer: DBModel_1.default,
    doctor: { type: index_1.ObjectId, required: true, ref: 'users' },
    state: { type: String, required: true },
    timeLine: { type: [mongoose_1.Schema.Types.Mixed], required: true, default: [] },
    type: { type: String, required: true },
    otherInfos: { type: mongoose_1.Schema.Types.Mixed, required: false },
    trackingCode: { type: String, required: true, unique: true },
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
