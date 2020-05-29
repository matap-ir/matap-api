import uuidv4 from 'uuid/v4';

const generateUUID = () => {
    return uuidv4();
};

const createResponsiveDaysText = (responseDays: {}): string=>{
    if(!responseDays || responseDays === ''){
        return '';
    }
    let text = '';
    Object.keys(responseDays).forEach((day)=>{
        const fromAndTo = createFromAndToResponsiveTime(responseDays[day]);
        if(fromAndTo){
            const dayText = dayNumberToString(day);
            text = text.concat(dayText+' => '+(fromAndTo ? fromAndTo.from+' - '+fromAndTo.to :  '') +'\n');
        }
    });
    return text;
};

const createFromAndToResponsiveTime = (value: string):{from:string,to:string} | undefined=> {
    if (!value || !value.includes('|')){
        return undefined;
    }
    return {from:value.split('|')[0],to:value.split('|')[1]};
};

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
    createResponsiveDaysText,
    createFromAndToResponsiveTime
};
