"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbModel = {
    type: { type: String, required: true },
    user: { type: mongoose_1.ObjectId, ref: 'users', required: false },
    admin: { type: mongoose_1.ObjectId, ref: 'admins', required: false }
};
exports.default = dbModel;
