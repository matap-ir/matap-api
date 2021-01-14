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
const isReserveValid = (request, workTimes, reserved) => {
    const smd = javascript_dev_kit_1.smartDate(request.from);
    const ymd = smd.toYMD();
    if (javascript_dev_kit_1.default.datesRangesConflict(request, reserved, 60 * 1000)) {
        return false;
    }
    return workTimes[smd.dayName()].find((workTime) => {
        if (workTime.exceptions && workTime.exceptions.length > 0 && workTime.exceptions.includes(ymd)) {
            return false;
        }
        return javascript_dev_kit_1.smartDate(ymd + ' ' + workTime.from).getTime() <= request.from && javascript_dev_kit_1.smartDate(ymd + ' ' + workTime.to).getTime() >= request.to;
    }) !== undefined;
};
const calculateWorkTimeIntervals = (day, reserved, workTimes, gapMinutes) => {
    const gapMillis = gapMinutes * 60 * 1000;
    const options = [];
    workTimes[day].forEach((workTime) => {
        if (workTime.exceptions && workTime.exceptions.length > 0 && workTime.exceptions.includes(now.toYMD())) {
            return;
        }
        const workTimeBeginning = javascript_dev_kit_1.smartDate(workTime.from);
        const workTimeEnd = javascript_dev_kit_1.smartDate(workTime.to);
        let timeIndex = workTimeBeginning.getTime();
        while (timeIndex + gapMillis <= workTimeEnd.getTime()) {
            if (!javascript_dev_kit_1.default.datesRangesConflict({ from: timeIndex, to: timeIndex + gapMillis }, reserved, 60 * 1000)) {
                options.push(javascript_dev_kit_1.smartDate(timeIndex).toHM() + ' - ' + javascript_dev_kit_1.smartDate(timeIndex + gapMillis).toHM());
            }
            timeIndex += gapMillis;
        }
    });
    return options;
};
exports.default = {
    generateUUID,
    dayNumberToString,
    createResponsiveDaysText,
    calculateWorkTimeIntervals,
    isReserveValid
};
