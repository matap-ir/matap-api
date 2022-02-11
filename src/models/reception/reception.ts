import {ObjectId, Prop, Schema} from '../../mongoose-types';
import User from '../users/User';

@Schema()
export default class Reception{
    _id: string;

    @Prop({type: [{type: ObjectId, ref: 'users'}]})
    doctor: User
}
