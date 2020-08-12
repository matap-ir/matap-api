import {MedicalService, User} from '../../index';

export default interface ServiceRequest{
    _id: string,
    service: MedicalService | string,
    age: number,
    requester:string | User,
    mobile: string,
    gender: 'male' | 'female',
    request_date: number,
    details: string,
    trackingCode: string,
    status:'CHECKING' | 'PAID' | 'WAITING_PAYMENT' | 'PROCESSING' | 'ENDED' | 'NOT_SEEN',
    price:number
}
