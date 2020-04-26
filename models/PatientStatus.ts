import {User} from '../index';
import Queue from '../Queue';

export default interface PatientStatus{
    room: {id:string,patient:User,doctor:User} | undefined,
    queue: string | Queue | undefined
}
