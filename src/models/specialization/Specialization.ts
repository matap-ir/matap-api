import {IsNotEmpty, IsString} from 'class-validator';
import { Prop,Schema } from '@nestjs/mongoose';

@Schema()
export default class Specialization {

    _id:string;

    @Prop()
    name:string;
}
