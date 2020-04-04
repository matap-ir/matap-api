import {User} from '../index';

export default interface Status{
    room: {id:string,patient:User,doctor:User} | undefined,
    ready: boolean,
    forDoctor:{
        queueList:User[]
    },
    forPatient:{
        queueDoctor:User | undefined
    }
}
