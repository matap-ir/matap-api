import {HealthCenter} from '../../../index';
import { Prop, Schema } from '@nestjs/mongoose';
import {ObjectId} from '../../../mongoose-types';

const fromToType = {from: String,to: String};

@Schema()
export default class ResponseTime{
    @Prop({type: fromToType,required: true})
    from: { hour:string, minute:string };

    @Prop({type: fromToType,required: true})
    to: { hour:string, minute:string };

    @Prop({type: ObjectId,ref: 'healthcenters',required: false})
    healthCenter?: string | HealthCenter;

    constructor(from: ResponseTime['from'], to: ResponseTime['to']) {
        this.from = from;
        this.to = to;
    }
}
