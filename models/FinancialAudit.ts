import {Transaction} from '../index';
import Visit from './visit/Visit';

export default interface FinancialAudit{
    total: number,
    companyCut: number,
    paid: number,
    doctorCut: number,
    discountAmounts: number,
    payable: number,
    medicalCenterCut: number,
    fromDate: number,
    toDate: number,
    unsettledVisits:Visit[]
};
