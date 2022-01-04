import {Schema, Prop} from '@nestjs/mongoose';

@Schema()
export default class DiscountCoupon{
    _id!:string;

    @Prop({required: true})
    title: string;

    @Prop({required: true, unique: true, index: true})
    code: string;

    @Prop({required: true})
    amount: number;

    @Prop({required: true})
    start_date: number;

    @Prop({required: true})
    end_date: number;

    @Prop({required: true})
    per_user_limit: number;

    @Prop({required: true})
    total_usage_limit: number;

    @Prop({type: [String],required: true, default: []})
    usages: string[];

    constructor(title: string,code: string,amount: number,startDate: number,endDate: number,perUserLimit: number,totalUsageLimit: number) {
        this.title = title;
        this.code = code;
        this.amount = amount;
        this.start_date = startDate;
        this.end_date = endDate;
        this.per_user_limit = perUserLimit;
        this.total_usage_limit = totalUsageLimit;
    }
}
