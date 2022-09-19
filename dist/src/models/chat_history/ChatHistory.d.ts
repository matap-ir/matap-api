import { Chat } from '../../../index';
export default class ChatHistory {
    roomId: string;
    members: string[];
    conversations: {
        delivered: string[];
        chat: Chat;
    }[];
    constructor(roomId: string, members: string[], conversations: ChatHistory['conversations']);
}
