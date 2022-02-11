"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminLog {
    constructor(url, path, user, date, method) {
        this.url = url;
        this.path = path;
        this.user = user;
        this.date = date;
        this.method = method;
    }
}
exports.default = AdminLog;
