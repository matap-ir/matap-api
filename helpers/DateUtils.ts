import moment from 'moment';
import {WorkTime} from '../index';

export const fullDateFormat = 'YYYY/MM/DD HH:mm';
export const hourMinuteFormat = 'HH:mm';
const formats = [
    'HH:mm',
    'YYYY/MM/DD HH:mm',
    'YYYY/MM/DD'
]

const getDayName = (date: number | string | moment.Moment): string=>{
    if(typeof date === 'number'){
        date = moment(date).format(fullDateFormat);
    }
    return moment(date,fullDateFormat).format('dddd').toLowerCase() as any;
};

const findFormat = (date: string): string | undefined=>{
    return formats.find((f: string)=>{
        try{
            const m = moment(date,f);
            if(m.format(f) === date){
                return f;
            }
        }catch (e){
            return undefined;
        }
    });
}

const convertToMoment = (date: number | string | moment.Moment): moment.Moment=>{
    if(typeof date === 'number') {
        return moment(date);
    }else if(typeof date === 'object'){
        return date;
    }else if(date){
        return moment(date,findFormat(date));
    }else{
        return undefined;
    }
};

const toYYYYMMDD = (date: string | number | moment.Moment): string=>{
    return convertToMoment(date).format('YYYY/MM/DD');
};

const isValidOption = (option: {from: number,to: number},reserved: {from: number,to: number}[],workTimes: any,gapMinutes: number): boolean=>{
    const options = findOptions(option.from,option.to,reserved,workTimes,gapMinutes);
    return Boolean(options.find(o => o.from === option.from && o.to === option.to));
};

const toYYYYMMDDHHmm = (date: string | number | moment.Moment): string=>{
    return convertToMoment(date).format('YYYY/MM/DD HH:mm');
};

const isInMiddle = (from: string | moment.Moment | number,middle: string | moment.Moment | number,to: string | moment.Moment | number,offset = 0): boolean=>{
    const fromTime = convertToMoment(toYYYYMMDDHHmm(from)).toDate().getTime() - offset;
    const middleTime = convertToMoment(toYYYYMMDDHHmm(middle)).toDate().getTime();
    const toTime = convertToMoment(toYYYYMMDDHHmm(to)).toDate().getTime() + offset;
    return fromTime <= middleTime && toTime >= middleTime;
};

const findConflict = (ranges:{from: number | string | moment.Moment,to: number | string | moment.Moment}[],offset = 0)=>{
    return ranges.find(r => {
        return ranges.find(r2 =>
            r2 !== r &&
            (
                isInMiddle(r.from,r2.from,r.to,offset) ||
                isInMiddle(r.from,r2.to,r.to,offset) ||
                isInMiddle(r2.from,r.from,r2.to,offset) ||
                isInMiddle(r2.from,r.to,r2.to,offset)
            )
        );
    });
};

const findOptions = (fromTime: number, toTime: number, reserved: {from: number, to: number}[], workTimes: any, gapMinutes: number): {from: number, to: number}[] => {
    const nowDate = moment(fromTime);
    const options: {from: number, to: number}[] = [];
    while (nowDate.toDate().getTime() < toTime) {
        const dayString = getDayName(nowDate);
        workTimes[dayString].forEach((workTime) => {
            if (workTime.exceptions.length > 0 && workTime.exceptions.includes(toYYYYMMDD(nowDate))) {
                return;
            }
            const fromMoment = moment(nowDate.toDate().getTime()).hour(convertToMoment(workTime.from).hour()).minutes(convertToMoment(workTime.from).minutes());
            const toMoment = moment(nowDate.toDate().getTime()).hour(convertToMoment(workTime.to).hour()).minutes(convertToMoment(workTime.to).minutes());
            let timeIndex = fromMoment.toDate().getTime();
            const gapMilli = gapMinutes * 60 * 1000;
            while (timeIndex + gapMilli <= toMoment.toDate().getTime()) {
                const res = reserved.find((r) => {
                    return findConflict([r,{from:timeIndex,to:timeIndex + gapMilli}]);
                    /*if (isInMiddle(r.from, timeIndex, r.to) || isInMiddle(r.from, timeIndex + gapMilli, r.to)) {
                        return true;
                    }*/
                });
                if (!res) {
                    options.push({ from: timeIndex, to: timeIndex + gapMilli });
                }
                timeIndex += gapMilli;
            }
        });
        nowDate.add(1, 'day');
    }
    return options;
};

export default {
    getDayName,
    toYYYYMMDD,
    toYYYYMMDDHHmm,
    convertToMoment,
    findFormat,
    isInMiddle,
    findOptions,
    isValidOption
}
