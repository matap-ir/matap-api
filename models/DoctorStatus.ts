import {User} from '../index';
import Visit from './visit/Visit';
import Reservation from './reservation/Reservation';

export default interface DoctorStatus{
    visit: Visit | undefined,
    ready: boolean,
    queueList:User[] | string[],
    reservations: Reservation[]
}
