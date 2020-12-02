import {User} from '../../index';
import {ReservationState} from '../Enums';

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
    selection: {from:number,to:number}[] // YYYY/MM/DD HH:mm
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
    patient: User,
    doctor: User,
    state: ReservationState,
    timeLine: (ReservationOffer | ReservationRequest | ReservationCancellation)[]
    due: {
        date: {from:number,to:number},
        message: string
    }
}
