import {MedicalService} from '../../index';

export default interface ServiceRequest{
    _id: string,
    service: MedicalService | string,
    age: number,
    mobile: string,
    gender: 'male' | 'female',
    details: string
}
