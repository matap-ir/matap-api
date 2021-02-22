export default abstract class GeneralEvent<T>{
    public readonly type: string;
    public readonly payload: T

    constructor(type: string,payload: T) {
        this.type = type;
        this.payload = payload;
        if(payload && payload instanceof Error){
            // @ts-ignore
            this.payload = {
                name: payload.name,
                message: payload.message,
                stack: payload.stack
            };
        }
    }
}
