import Helper from './helpers/Helper';
import {DayId, smartDate} from 'javascript-dev-kit';
import WorkTimes from './models/users/WorkTimes';

const request = {from:smartDate('10:00').getTime(),to:smartDate('10:30').getTime()}
const wt = [{from: '10:00',to:'10:30',exceptions:[smartDate().formatGregorian('YYYY/MM/DD')]}];
const gap = 30;
const worktimes: WorkTimes = {
    friday: wt,
    monday:wt,
    saturday:wt,
    sunday:wt,
    thursday:wt,
    tuesday:wt,
    wednesday:wt
}


console.log(Helper.isReserveValid(request,worktimes,[{from: smartDate('09:00').getTime(),to:smartDate('09:59').getTime()}]));
