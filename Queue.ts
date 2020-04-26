import {User} from './index';

interface Queue{
    _id: string,
    patient: User,
    doctor: User,
    discountId: string,
}

export default Queue;
