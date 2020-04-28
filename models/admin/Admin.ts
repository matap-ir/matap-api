import {AdminType} from '../Enums';

export default interface Admin {
    _id: string;
    name:string;
    username:string;
    password:string;
    type: AdminType,
    accesses: string[]
}
