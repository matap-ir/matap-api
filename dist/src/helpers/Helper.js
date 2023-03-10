"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const javascript_dev_kit_1 = tslib_1.__importStar(require("javascript-dev-kit"));
const generateUUID = () => {
    return javascript_dev_kit_1.default.generateUUID();
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
    const smd = (0, javascript_dev_kit_1.smartDate)(request.from);
    const ymd = smd.toYMD();
    if (request.from < (0, javascript_dev_kit_1.smartDate)().getTime()) {
        return false;
    }
    if (javascript_dev_kit_1.default.datesRangesConflict(request, reserved, 60 * 1000)) {
        return false;
    }
    return workTimes[smd.dayName()].find((workTime) => {
        if (workTime.exceptions && workTime.exceptions.length > 0 && workTime.exceptions.includes(ymd)) {
            return false;
        }
        return (0, javascript_dev_kit_1.smartDate)(ymd + ' ' + workTime.from).getTime() <= request.from && (0, javascript_dev_kit_1.smartDate)(ymd + ' ' + workTime.to).getTime() >= request.to;
    }) !== undefined;
};
const calculateWorkTimeIntervals = (fromTime, toTime, reserved, workTimes, gapMinutes) => {
    const minimumDate = (0, javascript_dev_kit_1.smartDate)(fromTime).getTime();
    const maximumDate = (0, javascript_dev_kit_1.smartDate)(toTime).getTime();
    const gapMillis = gapMinutes * 60 * 1000;
    const now = (0, javascript_dev_kit_1.smartDate)(fromTime);
    const options = [];
    while (now.getTime() < maximumDate) {
        const nowDateString = now.formatGregorian('YYYY/MM/DD');
        const todayWorkTimes = workTimes[now.dayName()];
        todayWorkTimes.forEach((workTime) => {
            if (workTime.exceptions && workTime.exceptions.length > 0 && workTime.exceptions.includes(now.formatGregorian('jYYYY/jMM/jDD'))) {
                return;
            }
            const workTimeBeginning = (0, javascript_dev_kit_1.smartDate)(nowDateString + ' ' + workTime.from);
            const workTimeEnd = (0, javascript_dev_kit_1.smartDate)(nowDateString + ' ' + workTime.to);
            let timeIndex = workTimeBeginning.getTime();
            while (timeIndex + gapMillis <= workTimeEnd.getTime() && timeIndex + gapMillis <= maximumDate) {
                if (timeIndex >= minimumDate && !javascript_dev_kit_1.default.datesRangesConflict({ from: timeIndex, to: timeIndex + gapMillis }, reserved, 60 * 1000)) {
                    options.push((0, javascript_dev_kit_1.smartDate)(timeIndex).toHM() + ' - ' + (0, javascript_dev_kit_1.smartDate)(timeIndex + gapMillis).toHM());
                }
                timeIndex += gapMillis;
            }
        });
        now.add(1, 'day').toBeginningOfDay();
    }
    return options;
};
exports.default = {
    generateUUID,
    dayNumberToString,
    createResponsiveDaysText,
    calculateWorkTimeIntervals,
    isReserveValid
};
