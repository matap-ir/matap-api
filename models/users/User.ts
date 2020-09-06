import {UserType} from '../Enums';
import {ResponseTime, Specialization} from '../../index';
import HealthCenter from '../health_center/HealthCenter';
import Visit from '../visit/Visit';

export default interface User {
    _id: string;
    mobile: string;
    type:UserType;
    name:string;
    imageUrl: string,
    code: number,
    specialization:Specialization,
    price:number,
    currency: number,
    ready: boolean,
    sms_code: string,
    fcmtoken: string,
    creationDate: number,
    finalizable_visits:Visit[] | string[],
    gender:'male' | 'female' | '',
    details:{
        maxVisitDurationMillisec: number,
        city:string,
        shaba:string,
        nezam_pezeshki_code:string,
        cut: number,
        clinics:HealthCenter[],
        hospitals:HealthCenter[],
        response_days:{
            0: ResponseTime[] ,// sunday
            1: ResponseTime[],// monday
            2: ResponseTime[],// tuesday
            3: ResponseTime[],// wednesday
            4: ResponseTime[],// thursday
            5: ResponseTime[],// friday
            6: ResponseTime[],// saturday
        },
    }
}
