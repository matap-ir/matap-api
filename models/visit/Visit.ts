import {User} from '../../index';

export default interface Visit{
    _id: string,
    patient: User,
    doctor: User,
    discountId?: string
}
