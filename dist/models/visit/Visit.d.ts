import { Chat, DiscountCoupon, User, Rating } from '../../index';
import { VisitStatus } from '../Enums';
import Conference from '../conference/Conference';
interface Visit {
    _id: string;
    patient: User;
    doctor: User;
    discount?: DiscountCoupon;
    conference?: Conference;
    state: VisitStatus;
    initiate_date: number;
    start_date: number;
    end_date: number;
    conversations: {
        delivered: string[];
        chat: Chat;
    }[];
    rating: Rating;
    chatting: boolean;
    maxDurationMillisec: number;
    receipt: {
        transaction_id: string;
        total: number;
        paid: number;
        doctorCut: number;
        discount: number;
        healthCenterCut: number;
        healthCenterId: string;
        return_transaction_id: string;
        settled: boolean;
        healthCenterSettled: boolean;
    };
}
export default Visit;
