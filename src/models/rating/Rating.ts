import {ObjectId, Prop, Schema} from '../../mongoose-types';

export default class Rating{
    _id!: string;

    @Prop({required: true})
    visitId: string;

    @Prop({required: true})
    service_quality: number;

    @Prop({required: true})
    video_call_satisfaction: number;

    @Prop({required: true})
    doctor_details_clearity: number;

    @Prop({required: true})
    doctor_solutions: number;

    @Prop({required: true})
    doctor_detailed_consequences: number;

    @Prop({required: true})
    environment_details: number;
};
