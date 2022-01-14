"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var index_1 = require("../../../index");
var mongoose_types_1 = require("../../mongoose-types");
var Admin = /** @class */ (function () {
    function Admin(name, username, password, type, privileges) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.type = type;
        this.privileges = privileges;
    }
    __decorate([
        mongoose_types_1.Prop()
    ], Admin.prototype, "name");
    __decorate([
        mongoose_types_1.Prop()
    ], Admin.prototype, "username");
    __decorate([
        mongoose_types_1.Prop()
    ], Admin.prototype, "password");
    __decorate([
        mongoose_types_1.Prop()
    ], Admin.prototype, "type");
    __decorate([
        mongoose_types_1.Prop({ type: function () { return index_1.Privileges; } })
    ], Admin.prototype, "privileges");
    Admin = __decorate([
        mongoose_types_1.Schema()
    ], Admin);
    return Admin;
}());
exports["default"] = Admin;
//# sourceMappingURL=Admin.js.map