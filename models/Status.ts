import {Specialization, User, UserType} from '../index';

export default interface Status{
    room: {id:string,patient:User,doctor:User} | undefined,
    ready: boolean,
    type: UserType,
    forDoctor:{
        queueList:User[]
    },
    forPatient:{
        queueDoctor:User | undefined
    }
}
