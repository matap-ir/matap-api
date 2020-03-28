import {UserType} from '../Enums';

export default interface User {
    _id: string;
    mobile: string;
    type:UserType;
    first_name:string;
    last_name:string,
    imageUrl: string,

    code: number
}
