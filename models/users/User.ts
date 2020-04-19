import {UserType} from '../Enums';
import {Specialization} from '../../index';
import HealthCenter from '../health_center/HealthCenter';

export default interface User {
    _id: string;
    mobile: string;
    type:UserType;
    name:string;
    imageUrl: string,
    code: number,
    specialization:Specialization,
    price:number,
    details:{
        city:string,
        nezam_pezeshki_code:string,
        monthlyCut: number,
        clinics:HealthCenter[],
        hospitals:HealthCenter[],
    }
}
