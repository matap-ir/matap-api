"use strict";
exports.__esModule = true;
var v4_1 = require("uuid/v4");
var generateUUID = function () {
    return v4_1["default"]();
};
var createResponsiveDaysText = function (responseDays) {
    if (!responseDays || responseDays === '') {
        return '';
    }
    var text = '';
    Object.keys(responseDays).forEach(function (day) {
        var array = responseDays[day];
        array.forEach(function (responseTime) {
            var dayText = dayNumberToString(day);
            text = text.concat(dayText + ' => ' + responseTime.from.hour + ':' + responseTime.from.minute + ' - ' + responseTime.to.hour + ':' + responseTime.to.minute + '\n');
        });
    });
    return text;
};
var dayNumberToString = function (day) {
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
exports["default"] = {
    generateUUID: generateUUID,
    dayNumberToString: dayNumberToString,
    createResponsiveDaysText: createResponsiveDaysText
};
//# sourceMappingURL=Helper.js.map