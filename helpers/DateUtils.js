"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWorktimeOptions = void 0;
const tslib_1 = require("tslib");
const javascript_dev_kit_1 = require("javascript-dev-kit");
const javascript_dev_kit_2 = tslib_1.__importDefault(require("javascript-dev-kit"));
const findWorktimeOptions = (fromTime, toTime, reserved, workTimes, gapMinutes) => {
    const nowDate = javascript_dev_kit_1.smartDate(fromTime);
    const options = [];
    const toTimeMillis = toTime.getTime();
    while (nowDate.getTime() < toTimeMillis) {
        workTimes[nowDate.dayName()].forEach((workTime) => {
            if (workTime.exceptions && workTime.exceptions.length > 0 && workTime.exceptions.includes(nowDate.toYMD())) {
                return;
            }
            const fromMoment = javascript_dev_kit_1.smartDate(workTime.from);
            const toMoment = javascript_dev_kit_1.smartDate(workTime.to);
            let timeIndex = fromMoment.getTime();
            const gapMilli = gapMinutes * 60 * 1000;
            while (timeIndex + gapMilli <= toMoment.getTime()) {
                if (!javascript_dev_kit_2.default.datesRangesConflict({ from: timeIndex, to: timeIndex + gapMilli }, reserved, 60 * 1000)) {
                    options.push(javascript_dev_kit_1.smartDate(timeIndex).toHM() + ' - ' + javascript_dev_kit_1.smartDate(timeIndex + gapMilli).toHM());
                }
                timeIndex += gapMilli;
            }
        });
        nowDate.add(1, 'day');
    }
    return options;
};
exports.findWorktimeOptions = findWorktimeOptions;
