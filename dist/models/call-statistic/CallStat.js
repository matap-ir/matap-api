"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CallStat {
    constructor(userId, userType, event, data) {
        this.timeStamp = Date.now();
        this.userId = userId;
        this.userType = userType;
        this.event = event;
        this.data = data;
    }
}
exports.default = {
    CallStat
};
