import {ObjectId, Prop, Schema} from '../../mongoose-types';

@Schema()
export default class Specialization {

    @Prop({type: ObjectId})
    _id:string;

    @Prop()
    name:string;
}
