import { DateInputTypes } from 'javascript-dev-kit';
import WorkTimes from '../models/users/WorkTimes';
declare const _default: {
    generateUUID: () => string;
    dayNumberToString: (day: string, lang?: string) => string;
    createResponsiveDaysText: (responseDays: {}, lang?: string) => string;
    calculateWorkTimeIntervals: (fromTime: DateInputTypes, toTime: DateInputTypes, reserved: {
        from: number;
        to: number;
    }[], workTimes: WorkTimes, gapMinutes: number) => string[];
    isReserveValid: (request: {
        from: number;
        to: number;
    }, workTimes: WorkTimes, reserved: {
        from: number;
        to: number;
    }[]) => boolean;
};
export default _default;
