import {UserType} from '../Enums';

export default interface User {
    _id: string;
    mobile: string;
    type:UserType;
    name:string;
    imageUrl: string,

    code: number,
    specialization: string
}
