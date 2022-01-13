import {UserType} from '../Enums';
import {ResponseTime, Specialization} from '../../../index';
import HealthCenter from '../health_center/HealthCenter';
import Visit from '../visit/Visit';
import WorkTimes from './WorkTimes';
import { Prop, Schema } from '@nestjs/mongoose';
import {ObjectId} from '../../mongoose-types';
import {Exclude} from 'class-transformer/';
import WorkTime from '../response_time/WorkTime';

class NotificationSettings{
    @Prop()
    notification!:boolean;

    @Prop()
    sms!:boolean
}

class SettingsType {
    @Prop({type: {newPatient: ()=> NotificationSettings,workTimeClose: ()=> NotificationSettings,workTimeEnded: ()=> NotificationSettings,workTimeStarted: ()=> NotificationSettings}})
    notifications!:{
        newPatient: NotificationSettings,
        workTimeClose: NotificationSettings,
        workTimeEnded:NotificationSettings,
        workTimeStarted:NotificationSettings
    }
};

class ReservationCoordinatesType{
    @Prop()
    lat: number;

    @Prop()
    lng: number
}

class WorkTimesType{
    @Prop()
    from: string;

    @Prop()
    to: string;

    @Prop({type: [String]})
    exceptions: string[]
}

class ReservationInfoDetailsType{
    @Prop()
    enabled: boolean;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop()
    gapMinutes: number;

    @Prop()
    cost: string;

    @Prop({required: false})
    coordinates:ReservationCoordinatesType;

    @Prop({required: true,type:{
            saturday: {type: WorkTimesType,required: true},
            sunday: {type: WorkTimesType,required: true},
            monday: {type: WorkTimesType,required: true},
            tuesday: {type: WorkTimesType,required: true},
            wednesday: {type: WorkTimesType,required: true},
            thursday: {type: WorkTimesType,required: true},
            friday: {type: WorkTimesType,required: true} }})
    workTimes: WorkTimes
}

class ResponseDaysDetailsType{
    0: [()=>ResponseTime];
    1: [()=>ResponseTime];
    2: [()=>ResponseTime];
    3: [()=>ResponseTime];
    4: [()=>ResponseTime];
    5: [()=>ResponseTime];
    6: [()=>ResponseTime];
}

class DetailsType {
    @Prop()
    reservationInfo!: ReservationInfoDetailsType;

    @Prop({required: true})
    phone: string;

    @Prop({required: true})
    address: string;

    @Prop({required: true})
    videoCallAllowed: boolean;

    @Prop({required: true})
    bio: string;

    @Prop({required: true, default: true})
    displayInList: boolean;

    @Prop({required: true})
    maxVisitDurationMillisec: number;

    @Prop()
    city: string;

    @Prop()
    shaba:string;

    @Prop()
    nezam_pezeshki_code:string;

    @Prop()
    cut: number;

    @Prop({type: [{type: ObjectId, ref: 'healthcenters'}]})
    clinics:[HealthCenter];

    @Prop({type: [{type: ObjectId, ref: 'healthcenters'}]})
    hospitals:[HealthCenter];

    @Prop({type: ()=> ResponseDaysDetailsType})
    response_days: {
        0: ResponseTime[],
        1: ResponseTime[],
        2: ResponseTime[],
        3: ResponseTime[],
        4: ResponseTime[],
        5: ResponseTime[],
        6: ResponseTime[],
    }
}

@Schema()
export default class User {
    _id!: string;

    @Prop({required: true, index: true, unique: true})
    mobile: string;

    @Prop({required: true})
    type:UserType;

    @Prop({required: false,default: ''})
    name:string = '';

    @Prop()
    imageUrl: string;

    @Prop()
    code: number;

    @Prop({type: ObjectId,ref: 'specializations'})
    specialization:Specialization;

    @Prop({required: false})
    price:number;

    @Prop({default: 0})
    currency: number = 0;

    @Prop()
    ready: boolean;

    @Exclude()
    @Prop()
    sms_code: string;

    @Exclude()
    @Prop()
    fcmtoken: string;

    @Prop()
    creationDate: number;

    @Prop({type: [String]})
    finalizable_visits:Visit[] | string[];

    @Prop()
    gender:'male' | 'female' | '' = '';

    @Exclude()
    @Prop({type:[String],default:[]})
    notificationQueuePatients: string[];

    @Prop()
    os?: string;

    @Prop({type: ()=> SettingsType})
    settings: SettingsType;

    @Prop({type: ()=> DetailsType})
    details: DetailsType

    constructor(type: UserType, mobile: string) {
        this.type = type;
        this.mobile = mobile;
    }
}
