import {User} from '../index';

export default interface DoctorStatus{
    room: {id:string,patient:User,doctor:User} | undefined,
    ready: boolean,
    queueList:User[] | string[]
}
