export default abstract class GeneralEvent<T> {
    readonly type: string;
    readonly payload: T;
    constructor(type: string, payload: T);
}
