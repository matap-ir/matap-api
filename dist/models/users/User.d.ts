import { UserType } from '../Enums';
import { ResponseTime, Specialization } from '../../index';
import HealthCenter from '../health_center/HealthCenter';
import Visit from '../visit/Visit';
import WorkTimes from './WorkTimes';
export default interface User {
    _id: string;
    mobile: string;
    type: UserType;
    name: string;
    imageUrl: string;
    code: number;
    specialization: Specialization;
    price: number;
    currency: number;
    ready: boolean;
    sms_code: string;
    fcmtoken: string;
    creationDate: number;
    finalizable_visits: Visit[] | string[];
    gender: 'male' | 'female' | '';
    notificationQueuePatients: string[];
    os?: string;
    settings: {
        notifications: {
            newPatient: {
                notification: boolean;
                sms: boolean;
            };
            workTimeClose: {
                notification: boolean;
                sms: boolean;
            };
            workTimeStarted: {
                notification: boolean;
                sms: boolean;
            };
            workTimeEnded: {
                notification: boolean;
                sms: boolean;
            };
        };
    };
    details: {
        reservationInfo: {
            enabled: boolean;
            phone: string;
            address: string;
            gapMinutes: number;
            coordinates?: {
                lat: number;
                lng: number;
            };
            workTimes: WorkTimes;
        };
        phone: string;
        address: string;
        videoCallAllowed: boolean;
        bio: string;
        displayInList: boolean;
        maxVisitDurationMillisec: number;
        city: string;
        shaba: string;
        nezam_pezeshki_code: string;
        cut: number;
        clinics: HealthCenter[];
        hospitals: HealthCenter[];
        response_days: {
            0: ResponseTime[];
            1: ResponseTime[];
            2: ResponseTime[];
            3: ResponseTime[];
            4: ResponseTime[];
            5: ResponseTime[];
            6: ResponseTime[];
        };
    };
}
