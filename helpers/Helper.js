"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const v4_1 = tslib_1.__importDefault(require("uuid/v4"));
const generateUUID = () => {
    return v4_1.default();
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
    }
};
exports.default = {
    generateUUID,
    dayNumberToString
};
