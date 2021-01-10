"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const uuid_1 = require("uuid");
const javascript_dev_kit_1 = tslib_1.__importStar(require("javascript-dev-kit"));
const generateUUID = () => {
    return uuid_1.v4();
};
const createResponsiveDaysText = (responseDays, lang = 'fa') => {
    if (!responseDays || responseDays === '') {
        return '';
    }
    let text = '';
    Object.keys(responseDays).forEach((day) => {
        const array = responseDays[day];
        array.forEach((responseTime) => {
            const dayText = dayNumberToString(day, lang);
            text = text.concat(dayText + ' => ' + responseTime.from.hour + ':' + responseTime.from.minute + ' - ' + responseTime.to.hour + ':' + responseTime.to.minute + '\n');
        });
    });
    return text;
};
const dayNumberToString = (day, lang = 'fa') => {
    switch (day) {
        case '0':
            return lang === 'fa' ? 'یکشنبه' : 'Sunday';
        case '1':
            return lang === 'fa' ? 'دوشنبه' : 'Monday';
        case '2':
            return lang === 'fa' ? 'سه شنبه' : 'Tuesday';
        case '3':
            return lang === 'fa' ? 'چهارشنبه' : 'Wednesday';
        case '4':
            return lang === 'fa' ? 'پنجشنبه' : 'Thursday';
        case '5':
            return lang === 'fa' ? 'جمعه' : 'Friday';
        case '6':
            return lang === 'fa' ? 'شنبه' : 'Saturday';
        default:
            return '';
    }
};
const findWorktimeIntervals = (fromTime, toTime, reserved, workTimes, gapMinutes) => {
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
                if (!javascript_dev_kit_1.default.datesRangesConflict({ from: timeIndex, to: timeIndex + gapMilli }, reserved, 60 * 1000)) {
                    options.push(javascript_dev_kit_1.smartDate(timeIndex).toHM() + ' - ' + javascript_dev_kit_1.smartDate(timeIndex + gapMilli).toHM());
                }
                timeIndex += gapMilli;
            }
        });
        nowDate.add(1, 'day');
    }
    return options;
};
exports.default = {
    generateUUID,
    dayNumberToString,
    createResponsiveDaysText,
    findWorktimeIntervals
};
