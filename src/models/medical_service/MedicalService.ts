import {ObjectId, Prop, Schema} from '../../mongoose-types';

@Schema()
export default class MedicalService{
    _id!: string;

    @Prop()
    logoUrl: string;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    subTitle: string;

    @Prop({required: true})
    details: string;

    @Prop({required: true})
    price: number;

    constructor(title: string,subTitle: string,details: string,price: number) {
        this.title = title;
        this.subTitle = subTitle;
        this.details = details;
        this.price = price;
    }
}
