import {ChatType, DeliveryStatus} from '../Enums';

export default interface Chat{
    _id:string,
    sender: string,
    text: string,
    deliveryStatus: DeliveryStatus,
    type: ChatType,
    date:Date,

    url: string,
    file_size:number,
}
