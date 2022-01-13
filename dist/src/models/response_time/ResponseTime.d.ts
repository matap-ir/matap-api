import { HealthCenter } from '../../../index';
export default class ResponseTime {
    from: {
        hour: string;
        minute: string;
    };
    to: {
        hour: string;
        minute: string;
    };
    healthCenter?: string | HealthCenter;
    constructor(from: ResponseTime['from'], to: ResponseTime['to']);
}
