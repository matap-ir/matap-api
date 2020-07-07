import uuidv4 from 'uuid/v4';
import {ResponseTime} from '../index';

const generateUUID = () => {
    return uuidv4();
};

const createResponsiveDaysText = (responseDays: {}): string=>{
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

/*const createFromAndToResponsiveTime = (value: string):{from:string,to:string} | undefined=> {
    if (!value || !value.includes('|')){
        return undefined;
    }
    if(value.split('|')[0] === '' || value.split('|')[1] === ''){
        return undefined;
    }
    return {from:value.split('|')[0],to:value.split('|')[1]};
};*/

const dayNumberToString = (day: string): string => {
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

export default {
    generateUUID,
    dayNumberToString,
    createResponsiveDaysText
};
