"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const javascript_dev_kit_1 = __importStar(require("javascript-dev-kit"));
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
    const smd = javascript_dev_kit_1.smartDate(request.from);
    const ymd = smd.toYMD();
    if (request.from < javascript_dev_kit_1.smartDate().getTime()) {
        return false;
    }
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
const calculateWorkTimeIntervals = (fromTime, toTime, reserved, workTimes, gapMinutes) => {
    const minimumDate = javascript_dev_kit_1.smartDate(fromTime).getTime();
    const maximumDate = javascript_dev_kit_1.smartDate(toTime).getTime();
    const gapMillis = gapMinutes * 60 * 1000;
    const now = javascript_dev_kit_1.smartDate(fromTime);
    const options = [];
    while (now.getTime() < maximumDate) {
        const nowDateString = now.formatGregorian('YYYY/MM/DD');
        const todayWorkTimes = workTimes[now.dayName()];
        todayWorkTimes.forEach((workTime) => {
            if (workTime.exceptions && workTime.exceptions.length > 0 && workTime.exceptions.includes(now.toYMD())) {
                return;
            }
            const workTimeBeginning = javascript_dev_kit_1.smartDate(nowDateString + ' ' + workTime.from);
            const workTimeEnd = javascript_dev_kit_1.smartDate(nowDateString + ' ' + workTime.to);
            let timeIndex = workTimeBeginning.getTime();
            while (timeIndex + gapMillis <= workTimeEnd.getTime() && timeIndex + gapMillis <= maximumDate) {
                if (timeIndex >= minimumDate && !javascript_dev_kit_1.default.datesRangesConflict({ from: timeIndex, to: timeIndex + gapMillis }, reserved, 60 * 1000)) {
                    options.push(javascript_dev_kit_1.smartDate(timeIndex).toHM() + ' - ' + javascript_dev_kit_1.smartDate(timeIndex + gapMillis).toHM());
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
