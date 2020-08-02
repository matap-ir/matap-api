import {User} from '../../index';

export default interface AdminLog{
    _id:string,
    url: string,
    path:string,
    headers?: string[],
    user:string | User,
    description?: string,
    date: number,
    body?:any,
    success?: boolean,
    params?: string[],
    type?:string,
    method:'POST' | 'PATCH'
}
