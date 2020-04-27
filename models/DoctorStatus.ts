import {User} from '../index';
import Visit from './visit/Visit';

export default interface DoctorStatus{
    visit: Visit | undefined,
    ready: boolean,
    queueList:User[] | string[]
}
