import {Admin} from '../../index';

export default interface Notification{
    _id: string,
    title: string,
    body: string,
    success: number,
    fails: number,
    date: number,
    sender: string | Admin,
    state:'SENDING' | 'DONE' | 'FAILED'
}
