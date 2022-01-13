"use strict";
exports.__esModule = true;
exports.ObjectId = exports.Schema = exports.Prop = void 0;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1["default"].Types.ObjectId;
exports.ObjectId = ObjectId;
function Prop(props) {
    return require('@nestjs/mongoose').Prop(props);
}
exports.Prop = Prop;
function Schema(options) {
    return require('@nestjs/mongoose').Schema(options);
}
exports.Schema = Schema;
//# sourceMappingURL=mongoose-types.js.map