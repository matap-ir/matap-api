"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const dbModel = {
    type: { type: String, required: true },
    user: { type: __1.ObjectId, ref: 'users', required: false },
    admin: { type: __1.ObjectId, ref: 'admins', required: false }
};
exports.default = dbModel;
