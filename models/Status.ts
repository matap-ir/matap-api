import {User} from '../index';

export default interface Status{
    room: string | undefined,
    ready: boolean,
    doctor:{
        queueList:User[]
    },
    patient:{
        queueDoctor:User
    }
}
