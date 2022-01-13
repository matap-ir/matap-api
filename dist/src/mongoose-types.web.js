"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectId = exports.Schema = exports.Prop = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
exports.ObjectId = ObjectId;
function Prop(props) {
    return () => { };
}
exports.Prop = Prop;
function Schema(options) {
    return () => { };
}
exports.Schema = Schema;
