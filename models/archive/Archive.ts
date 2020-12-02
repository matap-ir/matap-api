import {User} from '../../index';

export default interface Archive {
    _id: string,
    patient: User,
    doctor: User,
    note: string,
    attachments: string[],
    createdAt: number
};
