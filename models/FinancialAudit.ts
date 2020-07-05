import {Transaction} from '../index';

export default interface FinancialAudit{
    total: number,
    companyCut: number,
    paid: number,
    doctorCut: number,
    payable: number,
    fromDate: number,
    toDate: number
};
