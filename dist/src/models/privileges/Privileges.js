"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivilegeOptions = exports.PrivilegeOptionsDetails = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
class PrivilegeOptionsDetails {
}
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], PrivilegeOptionsDetails.prototype, "allowed", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Array)
], PrivilegeOptionsDetails.prototype, "whiteList", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], PrivilegeOptionsDetails.prototype, "test", void 0);
exports.PrivilegeOptionsDetails = PrivilegeOptionsDetails;
class PrivilegeOptions {
}
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptionsDetails)
], PrivilegeOptions.prototype, "post", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptionsDetails)
], PrivilegeOptions.prototype, "patch", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptionsDetails)
], PrivilegeOptions.prototype, "delete", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptionsDetails)
], PrivilegeOptions.prototype, "get", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptionsDetails)
], PrivilegeOptions.prototype, "put", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", Boolean)
], PrivilegeOptions.prototype, "menuVisible", void 0);
exports.PrivilegeOptions = PrivilegeOptions;
class Privileges {
}
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "users", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "admins", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "visits", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "medicalServices", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "healthCenters", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "adminLogs", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "reservations", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "discounts", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "serverConfigs", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "serviceRequests", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "specializations", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "transactions", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "notifications", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "analytics", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", PrivilegeOptions)
], Privileges.prototype, "calls", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], Privileges.prototype, "defaultTestFunction", void 0);
exports.default = Privileges;
