import uuidv4 from 'uuid/v4';

const generateUUID = () => {
    return uuidv4();
};

const createResponsiveDaysText = (day: string,value: string): string=>{
    const dayText = dayNumberToString(day);
    const fromAndTo = createFromAndToWorkTime(value);
    return dayText+' => '+(fromAndTo ? fromAndTo.from+' - '+fromAndTo.to :  '');
};

const createFromAndToWorkTime = (value: string):{from:string,to:string} | undefined=> {
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
    createFromAndToWorkTime
};
