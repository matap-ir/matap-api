import {Chat, DiscountCoupon, User, Rating} from '../../index';
import {VisitStatus} from '../Enums';

interface Visit{
    _id: string,
    patient: User | string,
    doctor: User | string,
    discount?: DiscountCoupon | string,
    state: VisitStatus,
    initiate_date: number,
    start_date: number,
    end_date: number,
    duration_limit: number,
    conversations : {delivered:string[],chat:Chat}[],
    rating: Rating,
    chatting:boolean,
    receipt:{
        transaction_id: string,
        total: number,
        paid: number,
        discount: number,
        return_transaction_id:string
    }
}

export default Visit;
