import {User, UserType} from '../index';
import Visit from './visit/Visit';

export default interface Status{
    room: Visit | undefined,
    ready: boolean,
    type: UserType,
    forDoctor:{
        queueList:User[]
    },
    forPatient:{
        queueDoctor:User | undefined
    }
}
