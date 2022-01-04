"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMetaData = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("@nestjs/mongoose");
class FileMetaData {
}
exports.FileMetaData = FileMetaData;
let FileInfo = class FileInfo {
};
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], FileInfo.prototype, "url", void 0);
FileInfo = tslib_1.__decorate([
    mongoose_1.Schema()
], FileInfo);
exports.default = FileInfo;
