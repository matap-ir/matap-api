import { CallStatEvent, UserType } from '../Enums';
declare class CallStat<T extends any> {
    readonly userId: string;
    readonly userType: UserType;
    readonly event: CallStatEvent;
    readonly data: T;
    readonly timeStamp: number;
    constructor(userId: string, userType: UserType, event: CallStatEvent, data: T);
}
declare const _default: {
    CallStat: typeof CallStat;
};
export default _default;
