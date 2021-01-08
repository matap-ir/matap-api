import {User} from '../../index';
import {ReservationState} from '../Enums';
import Issuer from '../issuer/Issuer';

export interface ReservationCancellation {
    _id: string,
    type:'cancellation',
    date: number,
    cancellerId: string,
    reason: string
}

export interface ReservationRequest {
    _id: string,
    type:'request',
    message: string,
    date: number,
    selection: {from:number,to:number}[],
    extras:{
        for: 'self' | 'other',
        name: string,
        mobile: string,
        age: number,
        gender: 'male' | 'female',
        nationalCode: string,
        attendReason: string
    },
    rejection?: {
        reason: string
    }
}

export interface ReservationOffer {
    _id: string,
    type: 'offer',
    message: string,
    date: number,
    offers: {from:number,to:number}[],
    rejection?: {
        reason: string
    }
}

export default interface Reservation {
    _id: string,
    requestDate: number,
    issuer: Issuer,
    doctor: User,
    state: ReservationState,
    timeLine: (ReservationOffer | ReservationRequest | ReservationCancellation)[],
    type : 'manual' | 'normal',
    trackingCode: string,
    due: {
        date: {from:number,to:number},
        message: string
    },
    otherInfos:{
        [key: string]: string
    }
}
