import {ChatType, ReceiveStatus, SendStatus} from '../Enums';
import {Prop} from '@nestjs/mongoose';

class MediaInfoType{

    @Prop()
    width:number;

    @Prop()
    height:number;

    @Prop()
    duration:number;

    @Prop()
    orientation:number;
}

export default class Chat{
    @Prop({required: true})
    id!:string;

    @Prop({required: true})
    sender!: string;

    @Prop()
    text: string;

    @Prop({required: true})
    sendStatus: SendStatus;

    @Prop({required: true})
    type: ChatType;

    @Prop()
    date:number;

    @Prop()
    url!: string;

    @Prop()
    file_size!:number;

    @Prop()
    file_name!: string;

    @Prop({type: ()=> MediaInfoType})
    mediaInfo!: MediaInfoType

    constructor(text: string,sendStatus: SendStatus,type: ChatType,date: number) {
        this.text = text;
        this.sendStatus = sendStatus;
        this.type = type;
        this.date = date;
    }
}
