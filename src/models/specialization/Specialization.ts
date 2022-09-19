import {ObjectId, Prop, Schema} from '../../mongoose-types';

@Schema()
export default class Specialization {

    _id:string;

    @Prop()
    name:string;

    @Prop({type: [{type: ObjectId,ref: 'specializations'}],default: []})
    parentSpecs: Specialization[];
}
