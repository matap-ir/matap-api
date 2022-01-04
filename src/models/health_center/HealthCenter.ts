import {HealthCenterType} from '../Enums';
import {Prop, Schema} from '@nestjs/mongoose';

@Schema()
export default class HealthCenter{
    _id!:string;

    @Prop({require: true})
    name:string;

    @Prop({require: true})
    address:string;

    @Prop()
    logoUrl?:string;

    @Prop()
    wallpaperUrl?: string;

    @Prop({require: true})
    type: HealthCenterType;

    @Prop({require: true, default: 0})
    percentage: number;

    @Prop({type: [String],require: true, default: []})
    priorities:string[];

    @Prop({require: true})
    shaba: string;

    @Prop({require: true, default:1000000})
    priority: number;

    constructor(name: string,address: string,type: HealthCenterType,percentage: number,priorities: string[],shaba: string,priority: number) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.percentage = percentage;
        this.priorities = priorities;
        this.shaba = shaba;
        this.priority = priority;
    }
};
