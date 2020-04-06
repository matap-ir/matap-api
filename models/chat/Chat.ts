import {ChatType, ReceiveStatus, SendStatus} from '../Enums';

export default interface Chat{
    id:string,
    sender: string,
    text: string,
    sendStatus: SendStatus,
    type: ChatType,
    date:number,

    url: string,
    file_size:number,
    file_name: string,
    mediaInfo:{
        width:number,
        height:number,
        duration:number,
        orientation:number
    }
}
