import {User} from '../../index';

export default interface AdminLog{
    url: string,
    headers?: string[],
    user:string | User,
    description?: string,
    date: number,
    body?:any
}
