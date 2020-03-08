import {Chat} from '../../index';

export default interface ChatHistory {
    roomId:string;
    members:string[];
    conversations : {delivered:string[],chat:Chat}[]
}
