import {MedicalService} from '../../index';

export default interface ServiceRequest{
    _id: string,
    service: MedicalService | string,
    age: number,
    mobile: string,
    gender: 'male' | 'female',
    request_date: number,
    details: string,
    trackingCode: string,
    status:'CHECKING' | 'WAITING_PAYMENT' | 'PROCESSING' | 'ENDED'
}
