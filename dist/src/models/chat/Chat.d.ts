import { ChatType, SendStatus } from '../Enums';
declare class MediaInfoType {
    width: number;
    height: number;
    duration: number;
    orientation: number;
}
export default class Chat {
    id: string;
    sender: string;
    text: string;
    sendStatus: SendStatus;
    type: ChatType;
    date: number;
    url: string;
    file_size: number;
    file_name: string;
    mediaInfo: MediaInfoType;
    constructor(text: string, sendStatus: SendStatus, type: ChatType, date: number);
}
export {};
