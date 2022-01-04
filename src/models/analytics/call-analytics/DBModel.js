"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    sessionId: { type: String, index: true, required: true },
    userId: { type: String, index: true, required: true },
    event: { type: String, required: true },
    data: { type: mongoose_1.Schema.Types.Mixed, required: false },
    timeStamp: { type: Number, required: true }
};
exports.default = dbModel;
