import {TransactionType} from '../Enums';
import {HealthCenter} from '../../index';

export default interface Transaction{
    _id:string,
    amount:number,
    type:TransactionType,
    discount: number,
    doctorCut: number,
    healthCenter: string | HealthCenter,
    healthCenterCut: number,
    issuer:{
        type: 'admin' | 'user',
        _id:string,
        name:string
    },
    target:{
        _id:string,
        name:string
    },
    tracking_code:string,
    visit_id:string,
    date:number,
    hint:string
}
