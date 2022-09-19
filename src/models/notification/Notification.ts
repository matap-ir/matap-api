import {Admin} from '../../../index';
import {ObjectId, Prop, Schema} from '../../mongoose-types';

export default class Notification{
    _id!: string;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    body: string;

    @Prop({required: true})
    successCount: number;

    @Prop({required: true})
    date: number;

    @Prop({type:ObjectId,ref:'admins',required: true})
    sender: string | Admin;

    @Prop({required: true})
    state:'SENDING' | 'DONE' | 'FAILED';

    @Prop({required: true})
    link: string;

    constructor(title: string,body: string,date: number,sender: string | Admin, state: Notification['state'], link: string) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.sender = sender;
        this.state = state;
        this.link = link;
    }
}
