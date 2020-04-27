import {User} from '../index';
import Visit from './visit/Visit';

export default interface PatientStatus{
    room: {id:string,patient:User,doctor:User} | undefined,
    queue: string | Visit | undefined
}
