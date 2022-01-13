"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const index_1 = require("../../../index");
const mongoose_types_1 = require("../../mongoose-types");
let Admin = class Admin {
    constructor(name, username, password, type, privileges) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.type = type;
        this.privileges = privileges;
    }
};
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "name", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "username", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "password", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop(),
    tslib_1.__metadata("design:type", String)
], Admin.prototype, "type", void 0);
tslib_1.__decorate([
    mongoose_types_1.Prop({ type: () => index_1.Privileges }),
    tslib_1.__metadata("design:type", index_1.Privileges)
], Admin.prototype, "privileges", void 0);
Admin = tslib_1.__decorate([
    mongoose_types_1.Schema(),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String, index_1.Privileges])
], Admin);
exports.default = Admin;
