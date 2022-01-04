import { TransactionType } from '../Enums';
import { HealthCenter } from '../../../index';
declare class IssuerType {
    _id: string;
    type: 'admin' | 'user';
    name: string;
}
declare class TargetType {
    _id: string;
    name: string;
}
export default class Transaction {
    _id: string;
    amount: number;
    type: TransactionType;
    discount: number;
    doctorCut: number;
    healthCenter: string | HealthCenter;
    healthCenterCut: number;
    issuer: IssuerType;
    target: TargetType;
    tracking_code: string;
    visit_id: string;
    date: number;
    hint: string;
    constructor(type: TransactionType, amount: number, date: number);
}
export {};
