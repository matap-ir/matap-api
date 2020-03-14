import {ChatType, ReceiveStatus, SendStatus} from '../Enums';

export default interface Chat{
    id:string,
    sender: string,
    text: string,
    sendStatus: SendStatus,
    type: ChatType,
    date:Date,

    url: string,
    file_size:number,

    mediaInfo:{
        width:number,
        height:number,
        duration:number,
        orientation:number
    }
}
