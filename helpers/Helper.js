"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const generateUUID = () => {
    return uuid_1.v4();
};
const get = () => {
    return '';
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
exports.default = {
    generateUUID,
    dayNumberToString,
    createResponsiveDaysText
};
