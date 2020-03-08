import {ChatType, DeliveryStatus} from '../Enums';

export default interface Chat{
    _id:string,
    sender: string,
    text: string,
    deliveryStatus: DeliveryStatus,
    type: ChatType,
    url: string,
    date:Date
}
