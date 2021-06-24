import {User} from '../../index';
import {ReservationState} from '../Enums';
import Issuer from '../issuer/Issuer';

export interface ReservationRequest {
    _id: string,
    type:'request',
    // message: string,
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
    }
}

export default interface Reservation {
    _id: string,
    requestDate: number,
    issuer: Issuer,
    doctor: User,
    state: ReservationState,
    type : 'manual' | 'normal',
    trackingCode: string,
    due: {
        date: {from:number,to:number},
        message: string
    },
    info:{
        for: 'self' | 'other',
        name: string,
        mobile: string,
        age: number,
        gender: 'male' | 'female',
        nationalCode: string,
        attendReason: string
    }
}
