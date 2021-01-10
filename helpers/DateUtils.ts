import WorkTimes from '../models/users/WorkTimes';
import Kit,{smartDate} from 'javascript-dev-kit';

const findWorktimeOptions = (fromTime: smartDate.SmartDate, toTime: smartDate.SmartDate, reserved: {from: number, to: number}[], workTimes: WorkTimes, gapMinutes: number): string[] => {
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

export {
    findWorktimeOptions
}

