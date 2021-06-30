"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("../Enums");
class AbstractCallMetric {
    constructor(userId, userType, data) {
        this.timeStamp = Date.now();
        this.userId = userId;
        this.userType = userType;
        this.data = data;
    }
}
class Stats extends AbstractCallMetric {
    constructor() {
        super(...arguments);
        this.event = Enums_1.CallStatEvent.STATS;
    }
}
exports.default = {
    AbstractCallMetric,
    Stats
};
