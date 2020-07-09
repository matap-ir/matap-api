import {TransactionType} from '../Enums';

export default interface Transaction{
    _id:string,
    amount:number,
    type:TransactionType,
    discount: number,
    doctorCut: number,
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
    healthCenterId: string,
    date:number,
    hint:string
}
