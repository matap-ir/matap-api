import {Transaction} from '../index';

export default interface FinancialAudit{
    payable: number,
    paid: number,
    fromDate: number,
    toDate: number
};
