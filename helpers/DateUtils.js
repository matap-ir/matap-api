"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hourMinuteFormat = exports.fullDateFormat = void 0;
const tslib_1 = require("tslib");
const moment_1 = tslib_1.__importDefault(require("moment"));
exports.fullDateFormat = 'YYYY/MM/DD HH:mm';
exports.hourMinuteFormat = 'HH:mm';
const formats = [
    'HH:mm',
    'YYYY/MM/DD HH:mm',
    'YYYY/MM/DD'
];
const getDayName = (date) => {
    if (typeof date === 'number') {
        date = moment_1.default(date).format(exports.fullDateFormat);
    }
    return moment_1.default(date, exports.fullDateFormat).format('dddd').toLowerCase();
};
const findFormat = (date) => {
    return formats.find((f) => {
        try {
            const m = moment_1.default(date, f);
            if (m.format(f) === date) {
                return f;
            }
        }
        catch (e) {
            return undefined;
        }
    });
};
const convertToMoment = (date) => {
    if (typeof date === 'number') {
        return moment_1.default(date);
    }
    else if (typeof date === 'object') {
        return date;
    }
    else if (date) {
        return moment_1.default(date, findFormat(date));
    }
    else {
        return undefined;
    }
};
const toYYYYMMDD = (date) => {
    return convertToMoment(date).format('YYYY/MM/DD');
};
const isValidOption = (option, reserved, workTimes, gapMinutes) => {
    const options = findOptions(option.from, option.to, reserved, workTimes, gapMinutes);
    return Boolean(options.find(o => o.from === option.from && o.to === option.to));
};
const toYYYYMMDDHHmm = (date) => {
    return convertToMoment(date).format('YYYY/MM/DD HH:mm');
};
const isInMiddle = (from, middle, to, offset = 0) => {
    const fromTime = convertToMoment(toYYYYMMDDHHmm(from)).toDate().getTime() - offset;
    const middleTime = convertToMoment(toYYYYMMDDHHmm(middle)).toDate().getTime();
    const toTime = convertToMoment(toYYYYMMDDHHmm(to)).toDate().getTime() + offset;
    return fromTime <= middleTime && toTime >= middleTime;
};
const findConflict = (ranges, offset = 0) => {
    return ranges.find(r => {
        return ranges.find(r2 => r2 !== r &&
            (isInMiddle(r.from, r2.from, r.to, offset) ||
                isInMiddle(r.from, r2.to, r.to, offset) ||
                isInMiddle(r2.from, r.from, r2.to, offset) ||
                isInMiddle(r2.from, r.to, r2.to, offset)));
    });
};
const findOptions = (fromTime, toTime, reserved, workTimes, gapMinutes) => {
    const nowDate = moment_1.default(fromTime);
    const options = [];
    while (nowDate.toDate().getTime() < toTime) {
        const dayString = getDayName(nowDate);
        workTimes[dayString].forEach((workTime) => {
            if (workTime.exceptions.length > 0 && workTime.exceptions.includes(toYYYYMMDD(nowDate))) {
                return;
            }
            const fromMoment = moment_1.default(nowDate.toDate().getTime()).hour(convertToMoment(workTime.from).hour()).minutes(convertToMoment(workTime.from).minutes());
            const toMoment = moment_1.default(nowDate.toDate().getTime()).hour(convertToMoment(workTime.to).hour()).minutes(convertToMoment(workTime.to).minutes());
            let timeIndex = fromMoment.toDate().getTime();
            const gapMilli = gapMinutes * 60 * 1000;
            while (timeIndex + gapMilli <= toMoment.toDate().getTime()) {
                const res = reserved.find((r) => {
                    return findConflict([r, { from: timeIndex, to: timeIndex + gapMilli }]);
                });
                if (!res) {
                    options.push({ from: timeIndex, to: timeIndex + gapMilli });
                }
                timeIndex += gapMilli;
            }
        });
        nowDate.add(1, 'day');
    }
    return options;
};
exports.default = {
    getDayName,
    toYYYYMMDD,
    toYYYYMMDDHHmm,
    convertToMoment,
    findFormat,
    isInMiddle,
    findOptions,
    isValidOption
};
