import {Chat, DiscountCoupon, User} from '../../index';

interface Visit{
    _id: string,
    patient: User | string,
    doctor: User | string,
    discount: DiscountCoupon | string,
    state: 'IN_QUEUE' | 'STARTED',
    initiate_date: number,
    start_date: number,
    conversations : {delivered:string[],chat:Chat}[]
}

export default Visit;
