"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrivilegeOptions = exports.PrivilegeOptionsDetails = void 0;
var mongoose_types_1 = require("../../mongoose-types");
var PrivilegeOptionsDetails = /** @class */ (function () {
    function PrivilegeOptionsDetails() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], PrivilegeOptionsDetails.prototype, "allowed");
    __decorate([
        mongoose_types_1.Prop()
    ], PrivilegeOptionsDetails.prototype, "whiteList");
    __decorate([
        mongoose_types_1.Prop()
    ], PrivilegeOptionsDetails.prototype, "test");
    return PrivilegeOptionsDetails;
}());
exports.PrivilegeOptionsDetails = PrivilegeOptionsDetails;
var PrivilegeOptions = /** @class */ (function () {
    function PrivilegeOptions() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], PrivilegeOptions.prototype, "post");
    __decorate([
        mongoose_types_1.Prop()
    ], PrivilegeOptions.prototype, "patch");
    __decorate([
        mongoose_types_1.Prop()
    ], PrivilegeOptions.prototype, "delete");
    __decorate([
        mongoose_types_1.Prop()
    ], PrivilegeOptions.prototype, "get");
    __decorate([
        mongoose_types_1.Prop()
    ], PrivilegeOptions.prototype, "put");
    __decorate([
        mongoose_types_1.Prop()
    ], PrivilegeOptions.prototype, "menuVisible");
    return PrivilegeOptions;
}());
exports.PrivilegeOptions = PrivilegeOptions;
var Privileges = /** @class */ (function () {
    function Privileges() {
    }
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "users");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "admins");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "visits");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "medicalServices");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "healthCenters");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "adminLogs");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "reservations");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "discounts");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "serverConfigs");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "serviceRequests");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "specializations");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "transactions");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "notifications");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "analytics");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "calls");
    __decorate([
        mongoose_types_1.Prop()
    ], Privileges.prototype, "defaultTestFunction");
    return Privileges;
}());
exports["default"] = Privileges;
//# sourceMappingURL=Privileges.js.map