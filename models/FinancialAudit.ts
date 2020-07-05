import {Transaction} from '../index';

export default interface FinancialAudit{
    total: number,
    companyCut: number,
    paid: number,
    doctorCut: number,
    discountAmounts: number,
    payable: number,
    fromDate: number,
    toDate: number
};
