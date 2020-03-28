import {User} from '../index';

export default interface Status{
    room: string | undefined,
    ready: boolean,
    forDoctor:{
        queueList:User[]
    },
    forPatient:{
        queueDoctor:User
    }
}
