import {User} from '../../index';

export default interface AdminLog{
    _id:string,
    url: string,
    headers?: string[],
    user:string | User,
    description?: string,
    date: number,
    body?:any
}
