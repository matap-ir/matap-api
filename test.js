"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Helper_1 = __importDefault(require("./helpers/Helper"));
const javascript_dev_kit_1 = require("javascript-dev-kit");
const request = { from: javascript_dev_kit_1.smartDate('10:00').getTime(), to: javascript_dev_kit_1.smartDate('10:30').getTime() };
const wt = [{ from: '10:00', to: '10:30', exceptions: [javascript_dev_kit_1.smartDate().formatGregorian('YYYY/MM/DD')] }];
const gap = 30;
const worktimes = {
    friday: wt,
    monday: wt,
    saturday: wt,
    sunday: wt,
    thursday: wt,
    tuesday: wt,
    wednesday: wt
};
console.log(Helper_1.default.isReserveValid(request, worktimes, [{ from: javascript_dev_kit_1.smartDate('09:00').getTime(), to: javascript_dev_kit_1.smartDate('09:59').getTime() }]));
