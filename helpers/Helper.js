"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const v4_1 = tslib_1.__importDefault(require("uuid/v4"));
const generateUUID = () => {
    return v4_1.default();
};
const createResponsiveDaysText = (day, value) => {
    const dayText = dayNumberToString(day);
    const fromAndTo = createFromAndToResponsiveTime(value);
    return dayText + ' => ' + (fromAndTo ? fromAndTo.from + ' - ' + fromAndTo.to : '');
};
const createFromAndToResponsiveTime = (value) => {
    if (!value || !value.includes('|')) {
        return undefined;
    }
    return { from: value.split('|')[0], to: value.split('|')[1] };
};
const dayNumberToString = (day) => {
    switch (day) {
        case '0':
            return 'یکشنبه';
        case '1':
            return 'دوشنبه';
        case '2':
            return 'سه شنبه';
        case '3':
            return 'چهارشنبه';
        case '4':
            return 'پنجشنبه';
        case '5':
            return 'جمعه';
        case '6':
            return 'شنبه';
        default:
            return '';
    }
};
exports.default = {
    generateUUID,
    dayNumberToString,
    createResponsiveDaysText,
    createFromAndToResponsiveTime
};
