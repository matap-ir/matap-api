import {IsNotEmpty, IsString} from 'class-validator';
import {ObjectId, Prop, Schema} from '../../mongoose-types';

@Schema()
export default class Specialization {

    _id:string;

    @Prop()
    name:string;
}
