import { HealthCenter } from '../../index';
export default interface ResponseTime {
    from: {
        hour: string;
        minute: string;
    };
    to: {
        hour: string;
        minute: string;
    };
    healthCenter: string | HealthCenter;
}
