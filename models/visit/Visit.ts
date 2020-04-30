import {Chat, DiscountCoupon, User} from '../../index';
import {VisitStatus} from '../Enums';

interface Visit{
    _id: string,
    patient: User | string,
    doctor: User | string,
    discount?: DiscountCoupon | string,
    state: VisitStatus,
    initiate_date: number,
    start_date: number,
    conversations : {delivered:string[],chat:Chat}[],
    receipt:{
        total: number,
        paid: number,
        discount: number
    }
}

export default Visit;
