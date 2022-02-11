import {ObjectId, Prop, Schema} from '../../mongoose-types';
import User from '../users/User';

@Schema()
export default class Reception{
    _id: string;

    @Prop({type: [{type: ObjectId, ref: 'users'}], index: true})
    doctor: User;

    @Prop({type: [{type: ObjectId, ref: 'users'}], index: true})
    patient: User;

    createdAt: number;
}
