import {ChatType, ReceiveStatus, SendStatus} from '../Enums';

export default interface Chat{
    _id:string,
    sender: string,
    text: string,
    sendStatus: SendStatus,
    receiveStatus: ReceiveStatus,
    type: ChatType,
    date:Date,

    url: string,
    file_size:number,
}
