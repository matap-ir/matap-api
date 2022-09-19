import { UserType } from '../Enums';
import { ResponseTime, Specialization } from '../../../index';
import HealthCenter from '../health_center/HealthCenter';
import Visit from '../visit/Visit';
import WorkTimes from './WorkTimes';
declare class NotificationSettings {
    notification: boolean;
    sms: boolean;
}
declare class SettingsType {
    notifications: {
        newPatient: NotificationSettings;
        workTimeClose: NotificationSettings;
        workTimeEnded: NotificationSettings;
        workTimeStarted: NotificationSettings;
    };
}
declare class ReservationCoordinatesType {
    lat: number;
    lng: number;
}
declare class ReservationInfoDetailsType {
    enabled: boolean;
    phone: string;
    address: string;
    gapMinutes: number;
    cost: string;
    coordinates: ReservationCoordinatesType;
    workTimes: WorkTimes;
}
declare class DetailsType {
    reservationInfo: ReservationInfoDetailsType;
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
    clinics: [HealthCenter];
    hospitals: [HealthCenter];
    response_days: {
        0: ResponseTime[];
        1: ResponseTime[];
        2: ResponseTime[];
        3: ResponseTime[];
        4: ResponseTime[];
        5: ResponseTime[];
        6: ResponseTime[];
    };
}
export default class User {
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
    referrer?: User;
    finalizable_visits: Visit[] | string[];
    followers: User[];
    gender: 'male' | 'female' | '';
    notificationQueuePatients: string[];
    os?: string;
    settings: SettingsType;
    details: DetailsType;
    constructor(type: UserType, mobile: string);
}
export {};
