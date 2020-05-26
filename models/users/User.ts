import {UserType} from '../Enums';
import {Specialization} from '../../index';
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
    finalizable_visits:Visit[] | string[],
    details:{
        city:string,
        nezam_pezeshki_code:string,
        monthlyCut: number,
        clinics:HealthCenter[],
        hospitals:HealthCenter[],
        response_days:{
            saturday?:string,
            sunday?: string,
            monday?: string,
            tuesday?: string,
            wednesday?: string,
            thursday?: string,
            friday?: string
        },
    }
}
