import {TransactionType} from '../Enums';
import {HealthCenter} from '../../../index';
import {ObjectId, Prop, Schema} from '../../mongoose-types';

class IssuerType{
    @Prop({required: true})
    _id!: string;

    @Prop({required: true})
    type!: 'admin' | 'user';

    @Prop({required: true})
    name!: string;
}

class TargetType{
    @Prop({required: true})
    _id!:string;

    @Prop({required: true})
    name!:string;
}

@Schema()
export default class Transaction{
    _id!:string;

    @Prop({required: true})
    amount:number;

    @Prop({required: true})
    type:TransactionType;

    @Prop()
    discount: number;

    @Prop()
    doctorCut: number;

    @Prop({type: ObjectId, ref:'healthcenters'})
    healthCenter: string | HealthCenter;

    @Prop()
    healthCenterCut: number;

    @Prop({type: ()=> IssuerType})
    issuer: IssuerType;

    @Prop({type: ()=> TargetType})
    target: TargetType;

    @Prop()
    tracking_code:string;

    @Prop()
    visit_id:string;

    @Prop({required: true})
    date:number;

    @Prop({default: ''})
    hint:string;

    constructor(type: TransactionType,amount: number,date: number) {
        this.type = type;
        this.amount = amount;
        this.date = date;
    }
}
