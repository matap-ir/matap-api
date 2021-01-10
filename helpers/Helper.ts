import { v4 as uuidv4 } from 'uuid';
import {ResponseTime} from '../index';
import Kit, {smartDate} from 'javascript-dev-kit';
import WorkTimes from '../models/users/WorkTimes';

const generateUUID = () => {
    return uuidv4();
};

const createResponsiveDaysText = (responseDays: {},lang = 'fa'): string=>{
    if(!responseDays || responseDays === ''){
        return '';
    }
    let text = '';
    Object.keys(responseDays).forEach((day)=>{
        const array:ResponseTime[] = responseDays[day];
        array.forEach((responseTime)=>{
            const dayText = dayNumberToString(day,lang);
            text = text.concat(dayText+' => '+responseTime.from.hour+':'+responseTime.from.minute+' - '+responseTime.to.hour+':'+responseTime.to.minute +'\n');
        })
    });
    return text;
};

const dayNumberToString = (day: string,lang = 'fa'): string => {
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

const findWorktimeIntervals = (fromTime: smartDate.SmartDate, toTime: smartDate.SmartDate, reserved: {from: number, to: number}[], workTimes: WorkTimes, gapMinutes: number): string[] => {
    const nowDate = smartDate(fromTime);
    const options: string[] = [];
    const toTimeMillis = toTime.getTime();
    while (nowDate.getTime() < toTimeMillis) {
        workTimes[nowDate.dayName()].forEach((workTime) => {
            if (workTime.exceptions && workTime.exceptions.length > 0 && workTime.exceptions.includes(nowDate.toYMD())) {
                return;
            }
            const fromMoment = smartDate(workTime.from);
            const toMoment = smartDate(workTime.to);
            let timeIndex = fromMoment.getTime();
            const gapMilli = gapMinutes * 60 * 1000;
            while (timeIndex + gapMilli <= toMoment.getTime()) {
                if (!Kit.datesRangesConflict({ from: timeIndex, to: timeIndex + gapMilli }, reserved, 60 * 1000)){
                    options.push(smartDate(timeIndex).toHM() + ' - ' + smartDate(timeIndex + gapMilli).toHM());
                }
                timeIndex += gapMilli;
            }
        });
        nowDate.add(1, 'day');
    }
    return options;
};

export default {
    generateUUID,
    dayNumberToString,
    createResponsiveDaysText,
    findWorktimeIntervals
};
