import {Transaction} from '../index';

export default interface FinancialAudit{
    total: number,
    paid: number,
    companyCut: number,
    doctorCut: number,
    fromDate: number,
    toDate: number
};
