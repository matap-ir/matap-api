"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("../Enums");
class AbstractCallStats {
    constructor(userId, userType, data) {
        this.timeStamp = Date.now();
        this.userId = userId;
        this.userType = userType;
        this.data = data;
    }
}
class Stats extends AbstractCallStats {
    constructor() {
        super(...arguments);
        this.event = Enums_1.CallStatEvent.STATS;
    }
}
exports.default = {
    CallStat: AbstractCallStats,
    Stats
};
