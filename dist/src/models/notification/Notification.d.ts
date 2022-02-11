import { Admin } from '../../../index';
export default class Notification {
    _id: string;
    title: string;
    body: string;
    successCount: number;
    date: number;
    sender: string | Admin;
    state: 'SENDING' | 'DONE' | 'FAILED';
    link: string;
    constructor(title: string, body: string, date: number, sender: string | Admin, state: Notification['state'], link: string);
}
