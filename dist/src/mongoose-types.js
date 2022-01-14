"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectId = exports.Schema = exports.Prop = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
exports.ObjectId = ObjectId;
function Prop(props) {
    console.log('IS NODE');
    return require('@nestjs/mongoose').Prop(props);
}
exports.Prop = Prop;
function Schema(options) {
    console.log('IS NODE');
    return require('@nestjs/mongoose').Schema(options);
}
exports.Schema = Schema;
