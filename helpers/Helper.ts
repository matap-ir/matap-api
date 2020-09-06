import uuidv4 from 'uuid/v4';
import {ResponseTime} from '../index';

const generateUUID = () => {
    return uuidv4();
};

const createResponsiveDaysText = (responseDays: {},language = 'fa'): string=>{
    if(!responseDays || responseDays === ''){
        return '';
    }
    let text = '';
    Object.keys(responseDays).forEach((day)=>{
        const array:ResponseTime[] = responseDays[day];
        array.forEach((responseTime)=>{
            const dayText = dayNumberToString(day);
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

export default {
    generateUUID,
    dayNumberToString,
    createResponsiveDaysText
};
