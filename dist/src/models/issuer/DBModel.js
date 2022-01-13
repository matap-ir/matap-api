"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_types_1 = require("../../../mongoose-types");
const dbModel = {
    type: { type: String, required: true },
    user: { type: mongoose_types_1.ObjectId, ref: 'users', required: false },
    admin: { type: mongoose_types_1.ObjectId, ref: 'admins', required: false }
};
exports.default = dbModel;
