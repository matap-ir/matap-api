"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbModel = {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    privileges: { type: require('../privileges/DBModel').default, required: true, default: {} },
};
exports.default = dbModel;
